import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Logout from '@material-ui/icons/ExitToApp';
import ActivityIcon from '@material-ui/icons/QueryBuilder';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledAppBar = styled(AppBar)`
    background-color: var(--main-color-dark-blue) !important;
    a:hover, a:link, a:visited, a:active {
      color: white !important;
      text-decoration: none;
    }
`;

const ControllerPanel = styled.div`
    text-align: right;
`;

const HeaderContainer = styled(Toolbar)`
    display: flex ;
    flex-direction: row ;
    justify-content: space-between;
`;

const ButtonCreateVoting = styled(Button)`
    margin-right: 25px !important;
    background-color: var(--main-color-yellow) !important;
    color: white;
    font-weight: bold !important;
`;

// FIXME: fix token management

class Header extends Component {
    cleanToken = () => {
      const { signOut } = this.props;

      localStorage.removeItem('token');
      signOut();
    };

    render() {
      const { languageText } = this.props;

      return (
        <StyledAppBar position='static'>
          <HeaderContainer>
            <Typography variant='h6' color='inherit' noWrap>
              <Link to='/'>VoteUp</Link>
            </Typography>
            <ControllerPanel>
              <ButtonCreateVoting variant='contained'>
                <Link to='/app/create/votings'>{languageText.createVoting}</Link>
              </ButtonCreateVoting>
              <IconButton title={languageText.activityTitle} color='inherit'>
                <Link to='/app/activity'>
                  <ActivityIcon />
                </Link>
              </IconButton>
              <IconButton
                title={languageText.logoutTitle}
                color='inherit'
                onClick={this.cleanToken}
              >
                <Logout />
              </IconButton>
            </ControllerPanel>
          </HeaderContainer>
        </StyledAppBar>
      );
    }
}

export default Header;
