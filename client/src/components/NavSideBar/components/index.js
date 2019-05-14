import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import { Badge } from 'reactstrap';
import { NotificationManager } from 'react-notifications';

const GroupContainer = styled.div`
    width: 100%;
    padding: 6% 4% 0 4%;
    
`;

const NavList = styled(List)`
    padding-top: 0px !important;
`;

const ItemText = styled(ListItemText)`
    padding: 0 !important;
    span {
      font-family: 'Nunito', sans-serif !important;
    }

    a:hover, a:link, a:visited, a:active {
      color: black !important;
    }
`;

const SubItemText = styled(ListItemText)`
    padding-left: 30px !important;
    span {
      color: var(--main-color-dark-blue) !important;
      font-weight: bold;
      font-family: 'Nunito', sans-serif !important;
    }
    &:hover {
      text-decoration: none !important;
    }
`;


class NavSideBar extends Component {
    state = {
      openNew: true,
      openRecent: true,
    };

    componentDidUpdate(prevProps) {
      const {
        getNewVotings, getRecentVotings, curGroupId, userId, votingsNew, languageText,
      } = this.props;
      const { openNew, openRecent } = this.state;

      if (prevProps.curGroupId !== curGroupId) {
        getNewVotings({ userId, groupId: curGroupId });
        getRecentVotings({ userId, groupId: curGroupId });

        if (!openNew) this.toggleVotings('new');
        if (!openRecent) this.toggleVotings('recent');
      }

      if (prevProps.votingsNew.length !== votingsNew.length && votingsNew.length > 0) {
        NotificationManager.success('', languageText.votingsAvailiable);
      }
    }


    toggleVotings = (type) => {
      return (type === 'new')
        ? this.setState(state => ({ openNew: !state.openNew }))
        : this.setState(state => ({ openRecent: !state.openRecent }));
    };


    chooseArrowForCollapse = (isOpen) => {
      return (isOpen)
        ? <ExpandLess />
        : <ExpandMore />;
    };

    getVotingsForRender = (votings) => {
      const { userId } = this.props;

      return (votings && votings.length)
        ? votings.map(({ topic, _id }) => (
          <ListItem button key={_id}>
            <Link to={`/app/votings/${_id}?userId=${userId}`}>
              <SubItemText primary={`# ${topic}`} />
            </Link>
          </ListItem>))
        : null;
    };

    handleLeaveGroup = () => {
      const { leaveGroup, curGroupId, userId } = this.props;
      leaveGroup({ userId, groupId: curGroupId });
    };

    render() {
      const {
        votingsNew, votingsRecent, groups, curGroupId, firstName, lastName, languageText,
      } = this.props;
      const { openRecent, openNew } = this.state;

      const currentGroup = groups.find(group => group._id === curGroupId);

      return (
        <React.Fragment>
          <GroupContainer>
            <h2>{ (currentGroup) ? currentGroup.name : '' }</h2>
            <h5>
              {
                (firstName && lastName)
                  ? `${firstName} ${lastName}`
                  : null
              }
            </h5>
            <hr />
          </GroupContainer>
          <NavList>
            <ListItem button onClick={() => this.toggleVotings('new')}>
              <ItemText inset primary={languageText.new} />
              <Badge>
                {
                  (votingsNew && votingsNew.length > 0)
                    ? `+ ${votingsNew.length}`
                    : 0
                }
              </Badge>
            </ListItem>
            <Collapse in={openNew} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                { this.getVotingsForRender(votingsNew) }
              </List>
            </Collapse>
            <ListItem button onClick={() => this.toggleVotings('recent')}>
              <ItemText inset primary={languageText.recent} />
              {this.chooseArrowForCollapse(openRecent)}
            </ListItem>
            <Collapse in={openRecent} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                { this.getVotingsForRender(votingsRecent) }
              </List>
            </Collapse>
            <ListItem button>
              <ItemText inset>
                <Link to='/app/votings/list'>{languageText.all}</Link>
              </ItemText>
            </ListItem>
            <ListItem button>
              <ItemText inset>
                <Link to={`/app/groups/${curGroupId}/users`}>{languageText.groupMembers}</Link>
              </ItemText>
            </ListItem>
            <ListItem button onClick={() => this.handleLeaveGroup()}>
              <ItemText inset>
                Leave group
              </ItemText>
            </ListItem>
          </NavList>
        </React.Fragment>
      );
    }
}

export default NavSideBar;
