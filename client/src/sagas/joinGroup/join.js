import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';
import { BASE_URL } from '../../constants/index';

import text from '../../l10n/text';

import {
  joinGroupSuccess,
  joinGroupError,
} from '../../routes/SignUp/modules/actions';

const curLang = 'en';
const { notifications } = text[curLang];

export default function* joinGroup({ payload }) {
  const { userId, groupId, isAdmin } = payload;

  try {
    const groups = yield call(axios, {
      url: `${BASE_URL}/users/${userId}/groups/${groupId}`,
      method: 'POST',
      data: { isAdmin },
    });

    NotificationManager.success('', notifications.join.success);

    yield put(joinGroupSuccess(groups.data));
  } catch (error) {
    NotificationManager.error(error.response.data.message, notifications.errorTitle);

    yield put(joinGroupError({
      ...error.response.data,
      status: error.response.status,
    }));
  }
}
