import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { IOT_URL } from '../../constants/index';

import {
  scanFingerPrintSuccess,
  scanFingerPrintError,
} from '../../routes/LoginForm/modules/actions';

export default function* scanFingerPrint({ payload }) {
  const { email, hash } = payload;

  try {
    const response = yield call(axios, {
      url: `${IOT_URL}/fingerprint?email=${email}&hash=${hash}`,
      method: 'get',
    });
    const fingerprint = response.status !== 204;
    yield put(scanFingerPrintSuccess(fingerprint));
  } catch (error) {
    yield put(scanFingerPrintError(error));
  }
}
