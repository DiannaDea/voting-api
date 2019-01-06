import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const VotingInput = styled(TextField)`
   margin: 20px 15px !important;
   width: 40%;
   label {
    color: var(--main-color-dark-blue) !important;
    font-weight: bold;
    font-size: 20px !important;
  }
`;

export const VotingInputGroup = styled.div`
  width: 100%;
`;

export const BlueButton = styled(Button)`
    margin-right: 25px !important;
    background-color: var(--main-color-blue) !important;
    color: white;
    font-weight: bold !important;
`;

export const YellowButton = styled(Button)`
    margin-right: 25px !important;
    background-color: var(--main-color-yellow) !important;
    color: white !important;
    font-weight: bold !important;
`;
