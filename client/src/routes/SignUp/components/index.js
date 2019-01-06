import React, { Component } from 'react';
import Fingerprint2 from 'fingerprintjs2';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import omit from 'lodash.omit';
import styled from 'styled-components';
import FormInput from '../../../components/FormInput';
import ScanFingerPrintPopup from '../../LoginForm/components/ScanFingerPrint';

import styles from '../../../components/FormInput/styles';
import { BlueButton } from '../../VotingForm/components/styled';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  div.half {
    width: 50%;
    padding: 20px;
  }
`;
class SignUp extends Component {
  state = {
    group: '',
    email: '',
    isAdmin: false,
    password: '',
    firstName: '',
    lastName: '',
    nickname: '',
    scanFingerPrintModalOpened: false,
    confirmedFingerPrint: this.props.confirmedFingerPrint,
  };

  componentDidMount() {
    const { location } = this.props;
    const queryParams = queryString.parse(location.search);

    this.setState(queryParams);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.confirmedFingerPrint !== state.confirmedFingerPrint && state.scanFingerPrintModalOpened) {
      return {
        confirmedFingerPrint: props.confirmedFingerPrint,
        scanFingerPrintModalOpened: false,
      };
    }
    return null;
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

  createFingerPrint = () => {
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

  openFingerPrintPopup = () => {
    this.setState({
      scanFingerPrintModalOpened: true,
    });
  }

  handleClose = () => {
    this.setState({
      scanFingerPrintModalOpened: false,
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
      error, user, classes, languageText, scanLanguageText, confirmedFingerPrint,
    } = this.props;
    const {
      email, password, firstName, nickname, scanFingerPrintModalOpened,
    } = this.state;

    return (
      <div className={classes.signUpContainer}>
        {
          (error && error.status === 400 && email === user.email)
            ? <Redirect to='/app' />
            : (
              <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                  <Typography component='h1' variant='h5'>
                    {languageText.title}
                  </Typography>
                  <form className={classes.form}>
                    <SignUpContainer>
                      <div className='half'>
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
                      </div>
                      <div className='half'>
                        <FormInput
                          fieldLabelName={languageText.nickName}
                          fieldName='nickname'
                          fieldValue={nickname}
                          onChangeHandler={this.handleChange}
                        />
                        <BlueButton
                          fullWidth
                          variant='contained'
                          color='primary'
                          className={classes.submit}
                          onClick={this.openFingerPrintPopup}
                        >
                          {languageText.buttonScanFingerPrint}
                        </BlueButton>
                        <BlueButton
                          fullWidth
                          disabled={confirmedFingerPrint !== 'ok'}
                          variant='contained'
                          color='primary'
                          className={classes.submit}
                          onClick={this.signUp}
                        >
                          {languageText.btnSignUp}
                        </BlueButton>
                      </div>
                    </SignUpContainer>


                  </form>
                </Paper>
              </main>
            )
        }
        <ScanFingerPrintPopup
          languageText={scanLanguageText}
          open={scanFingerPrintModalOpened}
          handleClose={this.handleClose}
          fingerPrintAcion={this.createFingerPrint}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SignUp);
