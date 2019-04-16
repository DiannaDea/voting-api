import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavSideBar from '../components';
import { getNewVotingsInit, getRecentVotingsInit } from '../modules/actions';
import { leaveGroupInit } from '../../GroupSideBar/modules/actions';

const mapStateToProps = state => ({
  curGroupId: state.groups.fetchData.curGroupId,
  userId: state.user.fetchData.personalInfo._id,
  votingsNew: state.votings.fetchData.new,
  votingsRecent: state.votings.fetchData.recent,
  groups: state.groups.fetchData.all || [],
  firstName: state.user.fetchData.personalInfo.firstName,
  lastName: state.user.fetchData.personalInfo.lastName,
  languageText: state.language.text.navSideBar,
});

const mapDispatchToProps = dispatch => ({
  getNewVotings: payload => dispatch(getNewVotingsInit(payload)),
  getRecentVotings: payload => dispatch(getRecentVotingsInit(payload)),
  leaveGroup: payload => dispatch(leaveGroupInit(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavSideBar));
