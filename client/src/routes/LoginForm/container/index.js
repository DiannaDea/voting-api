import connect from 'react-redux/es/connect/connect';
import LoginForm from '../components';
import { signInInit, getUserInit, scanFingerPrintInit } from '../modules/actions';

const mapStateToProps = state => ({
  token: state.user.fetchData.token,
  languageText: state.language.text.signIn,
});

const mapDispatchToProps = dispatch => ({
  signIn: payload => dispatch(signInInit(payload)),
  getUser: payload => dispatch(getUserInit(payload)),
  scanFingerPrint: payload => dispatch(scanFingerPrintInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
