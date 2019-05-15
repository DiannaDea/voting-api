import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';
import { BASE_URL } from '../../constants/index';

import text from '../../l10n/text';

import {
  addCandidatesSuccess,
  addCandidatesError,
} from '../../routes/VotingForm/modules/actions';

const curLang = 'en';
const { notifications } = text[curLang];

export default function* addCandidates({ payload }) {
  try {
    const candidates = yield call(axios, {
      url: `${BASE_URL}/candidates/many`,
      method: 'POST',
      data: payload,
    });

    const candidatesRes = (candidates.data === '')
      ? null
      : candidates.data;

    NotificationManager.success('', notifications.successTitle);
    yield put(addCandidatesSuccess(candidatesRes));
  } catch (error) {
    NotificationManager.error(error.response.data.message, notifications.errorTitle);
    yield put(addCandidatesError(error));
  }
}
