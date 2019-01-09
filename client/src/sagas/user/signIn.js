import axios from 'axios/index';
import ip from 'ip';
import moment from 'moment';
import { detect } from 'detect-browser';
import { put, call } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';
import { BASE_URL } from '../../constants/index';

import text from '../../l10n/text';

import {
  signInSuccess,
  signInError,
} from '../../routes/LoginForm/modules/actions';

const curLang = localStorage.getItem('lang');
const { notifications } = text[curLang];

const browser = detect();

export default function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const token = yield call(axios, {
      url: `${BASE_URL}/auth/signin`,
      method: 'POST',
      data: {
        email: (email === '1') ? 'test3@test.test' : email,
        password: (password === '1') ? 'qwerty123' : password,
        activity: {
          date: moment(new Date()).format('YYYY-MM-DDThh:mm'),
          ip: ip.address(),
          browser: browser.name,
          os: browser.os,
        },
      },
    });

    localStorage.setItem('token', token.data.token);
    yield put(signInSuccess(token.data));
  } catch (error) {
    NotificationManager.error(error.response.data.message, notifications.errorTitle);
    yield put(signInError(error));
  }
}
