import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Redirect, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import SelectLang from '../../../components/SelectLang';

import loginBg from '../assets/loginBg.jpg';

const styles = theme => ({
  loginContainer: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${loginBg})`,
    backgroundSize: 'cover',
    position: 'absolute',
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
});

class LoginForm extends Component {
    state = {
      email: '',
      password: '',
    };

    componentDidUpdate(prevProps) {
      const { token, getUser } = this.props;
      const { email } = this.state;

      if (token !== prevProps.token) {
        getUser({ email });
      }
    }

    handleChange = (event, field) => {
      this.setState({
        [field]: event.target.value,
      });
    };

    render() {
      const { signIn, classes, languageText } = this.props;
      const { email, password } = this.state;

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
                    <Typography component='p' variant='p'>
                      {languageText.createGroup.title}
                      <Link to='/create/group'>
                        {` ${languageText.createGroup.link}`}
                      </Link>
                    </Typography>
                    <form className={classes.form}>
                      <FormControl margin='normal' fullWidth>
                        <InputLabel htmlFor='email'>{languageText.chooseLanguage}</InputLabel>
                        <SelectLang />
                      </FormControl>
                      <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='lang'>{languageText.email}</InputLabel>
                        <Input
                          id='lang'
                          name='lang'
                          autoFocus
                          value={email}
                          onChange={event => this.handleChange(event, 'email')}
                        />
                      </FormControl>
                      <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='password'>{languageText.password}</InputLabel>
                        <Input
                          name='password'
                          type='password'
                          id='password'
                          value={password}
                          onChange={event => this.handleChange(event, 'password')}
                        />
                      </FormControl>
                      <Button
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                        onClick={() => signIn({ email, password })}
                      >
                        {languageText.buttonSignIn}
                      </Button>
                    </form>
                  </Paper>
                </main>
              )
          }

        </div>
      );
    }
}

export default withStyles(styles)(LoginForm);
