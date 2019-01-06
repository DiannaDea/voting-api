import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import LoginActivity from './LoginActivity';
import VotesActivity from './VotesActivity';

function TabContainer({ children, dir }) {
  return (
    <Typography component='div' dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 800,
  },
});

class ActivityContainer extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    const { userId, getVoteStat, getAuthStat } = this.props;

    if (userId) {
      getVoteStat({ userId });
      getAuthStat({ userId });
    }
  }

  componentDidUpdate(prevProp) {
    const { userId, getVoteStat, getAuthStat } = this.props;

    if (userId !== prevProp.userId) {
      getVoteStat({ userId });
      getAuthStat({ userId });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    const {
      classes, theme, authActivity, votesActivity, languageText,
    } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position='static' color='default'>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor='primary'
            textColor='primary'
            fullWidth
          >
            <Tab label={languageText.loginActivity} />
            <Tab label={languageText.votesActivity} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <LoginActivity
              authActivity={authActivity}
              languageText={languageText}
            />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <VotesActivity
              votesActivity={votesActivity}
              languageText={languageText}
            />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ActivityContainer);
