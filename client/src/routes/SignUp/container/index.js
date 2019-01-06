import connect from 'react-redux/es/connect/connect';
import SignUp from '../components';
import { checkUserInit, joinGroupInit } from '../modules/actions';
import { signUpInit, createFingerPrintInit } from '../../LoginForm/modules/actions';

const mapStateToProps = state => ({
  user: state.joinGroup.userToCheck,
  error: state.joinGroup.error,
  personalInfo: state.user.fetchData.personalInfo,
  hasJoined: state.joinGroup.status,
  languageText: state.language.text.signUp,
  scanLanguageText: state.language.text.scanPopup,
  confirmedFingerPrint: state.user.confirmedFingerPrint,
});

const mapDispatchToProps = dispatch => ({
  checkUser: payload => dispatch(checkUserInit(payload)),
  joinGroup: payload => dispatch(joinGroupInit(payload)),
  signUp: payload => dispatch(signUpInit(payload)),
  createFingerPrint: payload => dispatch(createFingerPrintInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
