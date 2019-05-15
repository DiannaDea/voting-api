import React, { Component } from 'react';
import Fingerprint2 from 'fingerprintjs2';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Redirect, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import FormHelperText from '@material-ui/core/FormHelperText';
import ScanFingerPrintPopup from './ScanFingerPrint';
import { BlueButton } from '../../VotingForm/components/styled';

const styles = theme => ({
  loginContainer: {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    backgroundColor: 'var(--main-color-gray);',
    top: 0,
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 6}px ${theme.spacing.unit * 7}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: `${theme.spacing.unit * 3}px`,
  },
  step: {
    marginTop: '20px',
  },
});

class LoginForm extends Component {
    state = {
      email: '',
      password: '',
      scanFingerPrintModalOpened: false,
      confirmedFingerPrint: this.props.confirmedFingerPrint,
      emailError: false,
      passwordError: false,
    };

    componentDidUpdate(prevProps) {
      const { token, getUser } = this.props;
      const { email } = this.state;

      if (token !== prevProps.token) {
        getUser({ email });
      }
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

    validateEmail = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    validatePassword = (password) => {
      const re = /^[a-zA-Z0-9]{6,30}$/;
      return re.test(password);
    }

    handleChangeEmail = (event) => {
      this.setState({
        email: event.target.value,
        emailError: !this.validateEmail(event.target.value),
      });
    };

    handleChangePassword = (event) => {
      this.setState({
        password: event.target.value,
        passwordError: !this.validatePassword(event.target.value),
      });
    };

    scanFingerPrint = () => {
      const { email } = this.state;
      const { scanFingerPrint } = this.props;

      new Fingerprint2().get((hash) => {
        scanFingerPrint({
          email, hash,
        });
      });
    };

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

    render() {
      const {
        signIn, classes, languageText, confirmedFingerPrint, scanLanguageText,
      } = this.props;
      const {
 email, password, scanFingerPrintModalOpened, emailError, passwordError 
} = this.state;

      return (
        <div className={classes.loginContainer}>
          {
            (localStorage.getItem('token'))
              ? <Redirect to='/app' />
              : (
                <main className={classes.main}>
                  <Paper className={classes.paper}>
                    <Typography component='h1' variant='h5'>
                      {languageText.title}
                    </Typography>
                    <form className={classes.form}>
                      <Typography align='center' className={classes.step} component='p' variant='p'>
                        Step 1. Fill in email and password
                      </Typography>
                      <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='email'>{languageText.email}</InputLabel>
                        <Input
                          error={emailError}
                          required
                          id='email'
                          name='email'
                          autoFocus
                          value={email}
                          type='email'
                          onChange={event => this.handleChangeEmail(event)}
                        />
                        {
                          (emailError)
                            ? <FormHelperText error={emailError}>Invalid email</FormHelperText>
                            : null
                        }
                      </FormControl>
                      <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='password'>{languageText.password}</InputLabel>
                        <Input
                          error={passwordError}
                          required
                          name='password'
                          type='password'
                          id='password'
                          value={password}
                          onChange={event => this.handleChangePassword(event)}
                        />
                        {
                          (passwordError)
                            ? <FormHelperText error={passwordError}>Invalid password. Must contain at least 6 symbols. Only numbers and letters are allowed</FormHelperText>
                            : null
                        }
                      </FormControl>
                      <Typography align='center' className={classes.step} component='p' variant='p'>
                        Step 2. Scan fingerprint
                      </Typography>
                      <BlueButton
                        disabled={!email.length || !password.length || emailError || passwordError || confirmedFingerPrint === 'ok'}
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                        onClick={this.openFingerPrintPopup}
                      >
                        {languageText.buttonScanFingerPrint}
                      </BlueButton>
                      <Typography align='center' className={classes.step} component='p' variant='p'>
                        Step 3. Sign in
                      </Typography>
                      <BlueButton
                        disabled={confirmedFingerPrint !== 'ok'}
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                        onClick={() => signIn({ email, password })}
                      >
                        {languageText.buttonSignIn}
                      </BlueButton>
                    </form>
                    <Typography className={classes.step} component='p' variant='p'>
                      {languageText.createGroup.title}
                      <Link to='/create/group'>
                        {` ${languageText.createGroup.link}`}
                      </Link>
                    </Typography>
                  </Paper>
                </main>
              )
          }
          <ScanFingerPrintPopup
            languageText={scanLanguageText}
            open={scanFingerPrintModalOpened}
            handleClose={this.handleClose}
            fingerPrintAcion={this.scanFingerPrint}
          />
        </div>
      );
    }
}

export default withStyles(styles)(LoginForm);
