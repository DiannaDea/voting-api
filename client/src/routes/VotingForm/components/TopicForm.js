import React, { Fragment } from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';

import { VotingInput, VotingInputGroup } from './styled';

const TopicForm = ({
 onChange, voting, languageText, errors 
}) => (
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
        error={errors.dateEnd}
        id='datetime-local'
        label={languageText.votingEnd}
        type='datetime-local'
        InputLabelProps={{
          shrink: true,
        }}
        value={voting.dateEnd}
        onChange={onChange('dateEnd')}
        helperText={(errors.dateEnd) ? 'Must be after time of voting start' : ''}
      />
    </VotingInputGroup>
    <VotingInputGroup>
      <VotingInput
        error={errors.votersPercent}
        required
        type='number'
        label={languageText.votersPercent}
        value={voting.votersPercent}
        onChange={onChange('votersPercent')}
        placeholder={languageText.votersPercent}
        InputLabelProps={{
          shrink: true,
        }}
        helperText={(errors.votersPercent) ? 'Must be greater than 15 and less that 100' : ''}
      />
    </VotingInputGroup>
  </Fragment>
);

export default TopicForm;
