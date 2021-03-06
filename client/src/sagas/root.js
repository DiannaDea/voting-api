import { fork } from 'redux-saga/effects';
import groups from './groups';
import votings from './votings';
import user from './user';
import joinGroup from './joinGroup';
import votingResults from './results';

export default function* rootSaga() {
  yield fork(groups);
  yield fork(votings);
  yield fork(user);
  yield fork(joinGroup);
  yield fork(votingResults);
}
