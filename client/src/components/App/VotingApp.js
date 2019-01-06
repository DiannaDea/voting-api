import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import jwtDecode from 'jwt-decode';
import GroupSideBar from '../GroupSideBar';
import NavSideBar from '../NavSideBar';
import Header from '../Header';
import { router, bodyRoutes } from '../../router';
import {
  SideBar,
  HeaderContainer,
  RootBody,
  RootContainer,
} from './styled';
import { getUserInit } from '../../routes/LoginForm/modules/actions';

class VotingApp extends Component {
  componentDidMount() {
    const { user, getUser } = this.props;

    if (!Object.keys(user).length && localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const { email } = jwtDecode(token);
      getUser({ email });
    }
  }

  render() {
    return (
      <Fragment>
        {
          (!localStorage.getItem('token'))
            ? (<Redirect to='/login' />)
            : (
              <Grid container spacing={0}>
                <SideBar item md={1} style={{ backgroundColor: 'var(--main-color-dark-blue)' }}>
                  <GroupSideBar />
                </SideBar>
                <SideBar item md={3} style={{ backgroundColor: 'var(--main-color-gray)' }}>
                  <NavSideBar />
                </SideBar>
                <SideBar item md={8}>
                  <Grid container direction='column' style={{ width: '100%' }}>
                    <HeaderContainer item md={12}>
                      <Header />
                    </HeaderContainer>
                    <RootBody item md={12}>
                      <RootContainer>
                        {router(bodyRoutes)}
                      </RootContainer>
                    </RootBody>
                  </Grid>
                </SideBar>
              </Grid>
            )
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  token: state.user.fetchData.token,
  user: state.user.fetchData.personalInfo,
});

const mapDispatchToProps = dispatch => ({
  getUser: payload => dispatch(getUserInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VotingApp);
