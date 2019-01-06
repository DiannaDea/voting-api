import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const styles = {
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const WinnerCard = styled(Card)`
  font-family: 'Nunito', sans-serif !important;
  width: 250px;
  margin-top: ${props => (props.winner ? '0px' : '50px')};
`;


function SimpleCard(props) {
  const { classes, result, languageText } = props;

  return (
    <WinnerCard winner={result.winner || false}>
      <CardContent>
        {
          (result.winner)
            ? (
              <Typography className={classes.title} color='textSecondary' gutterBottom>
                {`${languageText.winner}!!!`}
              </Typography>
            )
            : null
        }
        <Typography variant='h5' component='h2'>
          {result.candidate.name}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {result.candidate.description}
        </Typography>
        <Typography component='p'>
          {`${languageText.votesValue}: ${result.votesValue}`}
        </Typography>
        <Typography component='p'>
          {`${languageText.votesCount}: ${result.votesCount}`}
        </Typography>
      </CardContent>
    </WinnerCard>
  );
}

export default withStyles(styles)(SimpleCard);
