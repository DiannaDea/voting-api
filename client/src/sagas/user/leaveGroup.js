import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';
import { BASE_URL } from '../../constants/index';

import {
  leaveGroupSuccess,
  leaveGroupError,
} from '../../components/GroupSideBar/modules/actions';

export default function* getUser({ payload }) {
  const { userId, groupId } = payload;

  try {
    yield call(axios, {
      url: `${BASE_URL}/users/${userId}/groups/${groupId}`,
      method: 'PUT',
    });

    yield put(leaveGroupSuccess(payload));
    NotificationManager.success('', 'Successfully left group');
  } catch (error) {
    yield put(leaveGroupError());
    NotificationManager.error('', "Can't leave the last group");
  }
}
