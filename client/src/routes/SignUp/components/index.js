import React, { Component, Fragment } from 'react';
import Fingerprint2 from 'fingerprintjs2';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import omit from 'lodash.omit';
import FormInput from '../../../components/FormInput';

import styles from '../../../components/FormInput/styles';

class SignUp extends Component {
  state = {
    group: '',
    email: '',
    isAdmin: false,
    password: '',
    firstName: '',
    lastName: '',
    nickname: '',
  };

  componentDidMount() {
    const { location, createFingerPrint } = this.props;
    const queryParams = queryString.parse(location.search);

    this.setState(queryParams);

    new Fingerprint2().get((hash) => {
      createFingerPrint({
        email: queryParams.email,
        hash,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      email, group, isAdmin,
    } = this.state;
    const {
      checkUser, user, joinGroup, personalInfo, hasJoined,
    } = this.props;

    if (email !== prevState.email) {
      checkUser({ email });
    }

    if (user._id && prevProps.user._id !== user._id) {
      joinGroup({
        isAdmin,
        userId: user._id,
        groupId: group,
      });
    }

    if (Object.keys(personalInfo).length !== Object.keys(prevProps.personalInfo).length && !hasJoined) {
      joinGroup({
        isAdmin,
        userId: personalInfo._id,
        groupId: group,
      });
    }
  }

  handleChange = (event, field) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  signUp = () => {
    const { signUp } = this.props;

    signUp({
      ...omit(this.state, ['group', 'isAdmin']),
    });
  }

  render() {
    const {
      error, user, classes, languageText,
    } = this.props;
    const {
      email, password, firstName, lastName, nickname,
    } = this.state;

    return (
      <Fragment>
        {
          (error && error.status === 400 && email === user.email)
            ? <Redirect to='/app' />
            : (
              <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockIcon />
                  </Avatar>
                  <Typography component='h1' variant='h5'>
                    {languageText.title}
                  </Typography>
                  <form className={classes.form}>
                    <FormInput
                      fieldLabelName={languageText.email}
                      fieldName='email'
                      fieldValue={email}
                    />
                    <FormInput
                      fieldLabelName={languageText.password}
                      fieldName='password'
                      fieldValue={password}
                      onChangeHandler={this.handleChange}
                    />
                    <FormInput
                      fieldLabelName={languageText.firstName}
                      fieldName='firstName'
                      fieldValue={firstName}
                      onChangeHandler={this.handleChange}
                    />
                    <FormInput
                      fieldLabelName={languageText.lastName}
                      fieldName='lastName'
                      fieldValue={lastName}
                      onChangeHandler={this.handleChange}
                    />
                    <FormInput
                      fieldLabelName={languageText.nickName}
                      fieldName='nickname'
                      fieldValue={nickname}
                      onChangeHandler={this.handleChange}
                    />
                    <Button
                      fullWidth
                      variant='contained'
                      color='primary'
                      className={classes.submit}
                      onClick={this.signUp}
                    >
                      {languageText.btnSignUp}
                    </Button>
                  </form>
                </Paper>
              </main>
            )
        }
      </Fragment>
    );
  }
}

export default withStyles(styles)(SignUp);
