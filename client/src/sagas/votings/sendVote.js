import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import omit from 'lodash.omit';
import { NotificationManager } from 'react-notifications';
import { BASE_URL } from '../../constants/index';

import text from '../../l10n/text';

import {
  sendVoteSuccess,
  sendVoteError,
} from '../../routes/VotingItem/modules/actions';

const curLang = 'en';
const { notifications } = text[curLang];

export default function* sendVote({ payload }) {
  const { votingId } = payload;

  try {
    const vote = yield call(axios, {
      url: `${BASE_URL}/votings/${votingId}/vote`,
      method: 'POST',
      data: {
        ...omit(payload, ['votingId']),
      },
    });

    const voteRes = (vote.data === '')
      ? null
      : vote.data;

    NotificationManager.success('', notifications.successTitle);

    yield put(sendVoteSuccess(voteRes));
  } catch (error) {
    NotificationManager.error(error.response.data.message, notifications.errorTitle);

    yield put(sendVoteError(error));
  }
}
