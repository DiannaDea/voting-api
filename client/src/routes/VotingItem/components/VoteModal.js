import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { BlueButton } from '../../VotingForm/components/styled';

const AnswerContainer = styled.div`
  font-family: 'Nunito', sans-serif !important;
  margin: 30px 0;
  & p {
    margin: 0 !important;
    font-weight: bold;
  }
`;

const AnswerInput = styled(Input)`
  width: 100%;
`;

class VoteModal extends Component {
  state = {
    coefficientValues: [],
    chosenCandidate: '',
  }

  handleChange = (event) => {
    this.setState({
      chosenCandidate: event.target.value,
    });
  };


  handleVoteCoeffChange = (event, coefficient) => {
    const { coefficientValues } = this.state;
    const coeff = coefficientValues.find(c => c._id === coefficient._id);

    if (coeff) {
      this.setState({
        coefficientValues: [
          ...coefficientValues.filter(c => c._id !== coeff._id),
          {
            ...coeff,
            value: event.target.value,
          },
        ],
      });
    } else {
      this.setState({
        coefficientValues: [
          ...coefficientValues,
          {
            _id: coefficient._id,
            value: event.target.value,
          },
        ],
      });
    }
  }

  getCoeffValue = (coeffId) => {
    const { coefficientValues } = this.state;
    const coeff = coefficientValues.find(c => c._id === coeffId);

    return (coeff)
      ? coeff.value
      : '';
  }

  sendVote = () => {
    const {
      sendVote, votingId, userId, handleClose,
    } = this.props;
    const { coefficientValues, chosenCandidate } = this.state;

    sendVote({
      votingId,
      userId,
      coefficientValues,
      candidateId: chosenCandidate,
    });
    handleClose();
  }

  render() {
    const {
      open, handleClose, candidates, coefficients, languageText,
    } = this.props;
    const { chosenCandidate } = this.state;

    const CandidatesPart = () => (
      <Fragment>
        {
          <FormControl component='fieldset'>
            <DialogContentText>
              {languageText.vote.candidateText}
            </DialogContentText>
            <RadioGroup
              aria-label='Gender'
              name='gender1'
              value={chosenCandidate}
              onChange={this.handleChange}
            >
              {
                (candidates && candidates.length)
                  ? (candidates.map(candidate => (
                    <FormControlLabel
                      key={candidate._id}
                      value={candidate._id}
                      control={<Radio />}
                      label={candidate.name}
                    />
                  )))
                  : []
              }
            </RadioGroup>
          </FormControl>
        }
      </Fragment>
    );

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <Fragment>
          <DialogTitle>{languageText.vote.voteTitle}</DialogTitle>
          <DialogContent>
            <Grid container spacing={0}>
              <Grid item md={6}>
                <CandidatesPart />
              </Grid>
              <Grid item md={6}>
                <Fragment>
                  <DialogContentText>
                    {languageText.vote.weightText}
                  </DialogContentText>
                  {
                    (coefficients && coefficients.length)
                      ? (
                        coefficients.map(coeff => (
                          <AnswerContainer key={coeff._id}>
                            <p>{coeff.question}</p>
                            <AnswerInput
                              type='number'
                              placeholder={languageText.vote.enterAnswer}
                              inputProps={{
                                'aria-label': 'Description',
                              }}
                              value={this.getCoeffValue(coeff._id)}
                              onChange={event => this.handleVoteCoeffChange(event, coeff)}
                            />
                          </AnswerContainer>
                        ))
                      )
                      : null
                  }
                </Fragment>
              </Grid>
            </Grid>
          </DialogContent>
        </Fragment>
        <DialogActions>
          <Button
            onClick={handleClose}
            color='primary'
          >
            {languageText.buttons.closeModal}
          </Button>
          <BlueButton
            variant='contained'
            color='primary'
            onClick={this.sendVote}
          >
            {languageText.buttons.vote}
          </BlueButton>
        </DialogActions>
      </Dialog>
    );
  }
}

export default VoteModal;
