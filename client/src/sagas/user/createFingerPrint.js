import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';
import { IOT_URL } from '../../constants/index';

import text from '../../l10n/text';

import {
  createFingerPrintSuccess,
  createFingerPrintError,
} from '../../routes/LoginForm/modules/actions';

const curLang = localStorage.getItem('lang');
const { notifications } = text[curLang];

export default function* createFingerPrint({ payload }) {
  const { email, hash } = payload;

  try {
    const response = yield call(axios, {
      url: `${IOT_URL}/fingerprint`,
      method: 'POST',
      data: {
        email,
        hash,
        userId: 'dldlkfkfkf',
      },
    });
    const fingerprint = response.status !== 204;
    yield put(createFingerPrintSuccess(fingerprint));

    // eslint-disable-next-line no-unused-expressions
    (!fingerprint)
      ? NotificationManager.error('', notifications.scan.error)
      : NotificationManager.success('', notifications.scan.success);
  } catch (error) {
    yield put(createFingerPrintError(error));
    NotificationManager.error('', notifications.scan.error);
  }
}
