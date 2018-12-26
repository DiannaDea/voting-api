import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { IOT_URL } from '../../constants/index';

import {
  createFingerPrintSuccess,
  createFingerPrintError,
} from '../../routes/SignUp/modules/actions';

export default function* createFingerPrint({ payload }) {
  const { email, hash } = payload;

  try {
    yield call(axios, {
      url: `${IOT_URL}/fingerprint`,
      method: 'POST',
      data: {
        email,
        hash,
        userId: 'dldlkfkfkf',
      },
    });

    yield put(createFingerPrintSuccess());
  } catch (error) {
    yield put(createFingerPrintError(error));
  }
}
