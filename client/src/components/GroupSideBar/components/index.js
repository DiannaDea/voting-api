import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import {
  GroupSideBarContainer,
  CircleGroup,
  CircleGroupShadow,
  CircleGroupText,
  AddGroupBtn,
} from './styled';

class GroupSideBar extends Component {
  componentDidUpdate(prevProps) {
    const { getUserGroups, userId } = this.props;

    if (userId !== prevProps.userId) {
      getUserGroups({ userId });
    }
  }

  changeCurrentGroup = (newCurGroupId) => {
    const { changeCurrentGroup } = this.props;
    changeCurrentGroup({ newCurGroupId });
  };


  render() {
    const {
      groups, curGroupId, history, languageText,
    } = this.props;

    return (
      <GroupSideBarContainer>
        {
          (groups && groups.length)
            ? groups.map(({ _id, name }) => (
              <CircleGroup
                onClick={() => this.changeCurrentGroup(_id)}
                key={_id}
              >
                { (_id !== curGroupId) ? <CircleGroupShadow /> : null}
                <CircleGroupText>{name.slice(0, 3).toUpperCase()}</CircleGroupText>
              </CircleGroup>
            ))
            : null
        }
        <AddGroupBtn
          variant='fab'
          color='primary'
          aria-label='Add'
          title={languageText.createGroup}
          onClick={() => history.push('/create/group')}
        >
          <AddIcon />
        </AddGroupBtn>
      </GroupSideBarContainer>
    );
  }
}

export default GroupSideBar;
