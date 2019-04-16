import { takeEvery } from 'redux-saga/effects';
import {
  SIGN_IN_INIT,
  GET_USER_INIT,
  SIGN_UP_INIT,
  SCAN_FINGERPRINT_INIT,
  CREATE_FINGERPRINT_INIT,
} from '../../routes/LoginForm/modules/types';
import {
  GET_AUTH_STAT_INIT,
  GET_VOTE_STAT_INIT,
} from '../../routes/Activity/modules/types';
import { LEAVE_GROUP_REQUEST } from '../../components/GroupSideBar/modules/types';

import signIn from './signIn';
import getUser from './getUser';
import signUp from './signUp';
import votesStat from './votesActivity';
import authStat from './getAuthStat';
import createFingerPrint from './createFingerPrint';
import scanFingerPrint from './scanFingerPrint';
import leaveGroup from './leaveGroup';

export default function* groups() {
  yield takeEvery(SIGN_IN_INIT, signIn);
  yield takeEvery(GET_USER_INIT, getUser);
  yield takeEvery(SIGN_UP_INIT, signUp);
  yield takeEvery(GET_VOTE_STAT_INIT, votesStat);
  yield takeEvery(GET_AUTH_STAT_INIT, authStat);
  yield takeEvery(CREATE_FINGERPRINT_INIT, createFingerPrint);
  yield takeEvery(SCAN_FINGERPRINT_INIT, scanFingerPrint);
  yield takeEvery(LEAVE_GROUP_REQUEST, leaveGroup);
}
