import mongoose from 'mongoose';

import Voting from '../models/Voting';
import errors from '../errors';
import Candidate from '../models/Candidate';

const votingErrors = errors.votings;

export default class VotingController {
    static async create(ctx) {
        const votingParams = ctx.request.body;

        try {
            const voting = await Voting.create({
                _id: new mongoose.Types.ObjectId(),
                ...votingParams,
            });

            return (voting)
                ? ctx.send(200, voting)
                : ctx.send(400, votingErrors.unableToCreate);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async get(ctx) {
        const { votingId } = ctx.params;

        try {
            const voting = await Voting.findById(votingId);

            return (voting)
                ? ctx.send(200, voting)
                : ctx.send(204);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async delete(ctx) {
        const { votingId } = ctx.params;
        try {
            const voting = await Voting.findById(votingId);

            if (voting.status === 'pending') {
                return ctx.send(400, votingErrors.unableToDeleteVotingStarted);
            }

            await Candidate.deleteMany({ votingId });
            await voting.remove();

            return (voting)
                ? ctx.send(200, voting)
                : ctx.send(400);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async update(ctx) {
        const { votingId } = ctx.params;
        const updateParams = ctx.request.body;

        try {
            const voting = await Voting.findOneAndUpdate({
                _id: votingId,
            }, updateParams);

            return (voting)
                ? ctx.send(200, voting)
                : ctx.send(400);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async getAllCandidates(ctx) {
        const { votingId } = ctx.params;

        try {
            const candidates = await Candidate.find({ votingId });

            return (candidates)
                ? ctx.send(200, candidates)
                : ctx.send(204);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async votingExists(ctx, next) {
        const { votingId } = ctx.params;
        const voting = await Voting.findById(votingId);

        if (!voting) {
            return ctx.send(400, votingErrors.noSuchId(votingId));
        }
        return next();
    }
}
