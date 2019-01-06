import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import FaceIcon from '@material-ui/icons/Face';
import PopupSuccess from './PopupSuccess';
import styles from './styled';
import { BlueButton } from '../../VotingForm/components/styled';


class CreateGroupForm extends Component {
  state = {
    name: '',
    adminEmail: '',
    membersEmails: [],
    lastMember: '',
    successModalOpened: false,
    prevPropsGroupId: this.props.groupId,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.groupId !== state.prevPropsGroupId && !state.successModalOpened) {
      return {
        prevPropsGroupId: props.groupId,
        successModalOpened: true,
      };
    }
    return null;
  }

  handleChange = (event, field) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  addMember = () => {
    const { lastMember, membersEmails } = this.state;

    if (lastMember !== '') {
      this.setState({
        membersEmails: [...membersEmails, lastMember],
        lastMember: '',
      });
    }
  };

  deleteMember = (email) => {
    const { membersEmails } = this.state;
    this.setState({
      membersEmails: [
        ...membersEmails.filter(el => el !== email)],
    });
  };

  createGroup = () => {
    const { createGroup } = this.props;
    const { name, adminEmail, membersEmails } = this.state;

    createGroup({ name, adminEmail, membersEmails });
  };

  handleClose = () => {
    this.setState({
      successModalOpened: false,
      name: '',
      adminEmail: '',
      membersEmails: [],
    });
  };

  render() {
    const { classes, languageText } = this.props;
    const {
      name, adminEmail, membersEmails, lastMember, successModalOpened,
    } = this.state;

    return (
      <div className={classes.mainContainer}>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Typography component='h1' variant='h5'>
              {languageText.title}
            </Typography>
            <Typography component='p' variant='p'>
              {languageText.signIn.title}
              <Link to='/login'>
                {` ${languageText.signIn.link}`}
              </Link>
            </Typography>
            <form className={classes.form}>
              <FormControl margin='normal' required fullWidth>
                <InputLabel htmlFor='name'>{languageText.group}</InputLabel>
                <Input
                  id='name'
                  name='name'
                  autoFocus
                  value={name}
                  onChange={event => this.handleChange(event, 'name')}
                />
              </FormControl>
              <FormControl margin='normal' required fullWidth>
                <InputLabel htmlFor='adminEmail'>{languageText.adminEmail}</InputLabel>
                <Input
                  name='adminEmail'
                  id='adminEmail'
                  type='email'
                  value={adminEmail}
                  onChange={event => this.handleChange(event, 'adminEmail')}
                />
              </FormControl>
              <FormControl className={classes.addMemberControll} margin='normal' required fullWidth>
                <InputLabel htmlFor='memberEmail'>{languageText.memberEmail}</InputLabel>
                <Input
                  className={classes.memberInput}
                  name='memberEmail'
                  id='memberEmail'
                  value={lastMember}
                  onChange={event => this.handleChange(event, 'lastMember')}
                />
                <BlueButton
                  variant='contained'
                  color='primary'
                  className={classes.addMemeber}
                  onClick={this.addMember}
                >
                  {languageText.buttons.addMember}
                </BlueButton>
              </FormControl>
              <Fragment>
                {
                  membersEmails.map((email, index) => (
                    <Chip
                      avatar={(
                        <Avatar>
                          <FaceIcon />
                        </Avatar>
                      )}
                      key={index}
                      label={email}
                      className={classes.chip}
                      onDelete={() => this.deleteMember(email)}
                    />
                  ))
                }
              </Fragment>
              <BlueButton
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={this.createGroup}
              >
                {languageText.buttons.createGroup}
              </BlueButton>
            </form>
          </Paper>
        </main>
        <PopupSuccess
          languageText={languageText}
          open={successModalOpened}
          handleClose={this.handleClose}
        />
      </div>

    );
  }
}

export default withStyles(styles)(CreateGroupForm);
