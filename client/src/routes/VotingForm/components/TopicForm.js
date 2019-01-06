import React, { Fragment } from 'react';

import { VotingInput, VotingInputGroup } from './styled';

const TopicForm = ({ onChange, voting, languageText }) => (
  <Fragment>
    <VotingInputGroup>
      <VotingInput
        label={languageText.topic}
        value={voting.topic}
        onChange={onChange('topic')}
        placeholder={languageText.topic}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </VotingInputGroup>
    <VotingInputGroup>
      <VotingInput
        id='datetime-local'
        label={languageText.votingStart}
        type='datetime-local'
        InputLabelProps={{
          shrink: true,
        }}
        value={voting.dateStart}
        onChange={onChange('dateStart')}
      />
      <VotingInput
        id='datetime-local'
        label={languageText.votingEnd}
        type='datetime-local'
        InputLabelProps={{
          shrink: true,
        }}
        value={voting.dateEnd}
        onChange={onChange('dateEnd')}
      />
    </VotingInputGroup>
    <VotingInputGroup>
      <VotingInput
        type='number'
        label={languageText.votersPercent}
        value={voting.votersPercent}
        onChange={onChange('votersPercent')}
        placeholder={languageText.votersPercent}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </VotingInputGroup>
  </Fragment>
);

export default TopicForm;
