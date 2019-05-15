import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';
import { BASE_URL } from '../../constants/index';

import text from '../../l10n/text';

import {
  signUpSuccess,
  signUpError,
} from '../../routes/LoginForm/modules/actions';

const curLang = 'en';
const { notifications } = text[curLang];

export default function* signUp({ payload }) {
  try {
    const user = yield call(axios, {
      url: `${BASE_URL}/auth/signup`,
      method: 'POST',
      data: payload,
    });

    NotificationManager.success('', notifications.signUp.success);

    yield put(signUpSuccess(user.data));
  } catch (error) {
    NotificationManager.error(error.response.data.message, notifications.errorTitle);

    yield put(signUpError(error));
  }
}
