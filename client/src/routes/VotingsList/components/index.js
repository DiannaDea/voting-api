import React, { Fragment, Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import ResultsModal from './ResultsModal';
import { BlueButton } from '../../VotingForm/components/styled';

class VotingsList extends Component {
  state = {
    isResultsModalOpen: false,
    curVoting: null,
  }

  toggleVoteModal(open, votingId) {
    this.setState({
      isResultsModalOpen: open,
      curVoting: votingId,
    });
  }

  render() {
    const {
      votingsNew, votingsRecent, getResults, votingResults, languageText,
    } = this.props;
    const { isResultsModalOpen, curVoting } = this.state;

    return (
      <Fragment>
        <h5>{languageText.title}</h5>
        {
          (!votingsNew.length && !votingsRecent.length)
            ? <p>{languageText.noVotings}</p>
            : (
              <List>
                {
                  ([
                    ...votingsNew,
                    ...votingsRecent,
                  ].map(({
                    _id, topic, dateStart, dateEnd, status,
                  }) => {
                    const dateFrom = moment(dateStart).format('MMMM Do YYYY');
                    const dateTo = moment(dateEnd).format('MMMM Do YYYY');

                    return (
                      <ListItem key={_id}>
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                        <ListItemText primary={topic} secondary={`${dateFrom} - ${dateTo}`} />
                        {
                          (status === 'finished')
                            ? (
                              <BlueButton
                                variant='contained'
                                color='primary'
                                onClick={() => this.toggleVoteModal(true, _id)}
                              >
                                {languageText.buttons.getResults}
                              </BlueButton>
                            )
                            : null
                        }
                      </ListItem>
                    );
                  }))
                }
              </List>
            )
        }
        <ResultsModal
          languageText={languageText}
          votingResults={votingResults}
          getResults={getResults}
          votingId={curVoting}
          open={isResultsModalOpen}
          handleClose={() => this.toggleVoteModal(false)}
        />
      </Fragment>
    );
  }
}

export default VotingsList;
