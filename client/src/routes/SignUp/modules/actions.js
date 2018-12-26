import {
  JOIN_GROUP_INIT,
  JOIN_GROUP_SUCCESS,
  JOIN_GROUP_ERROR,
  CHECK_USER_EXISTS_INIT,
  CHECK_USER_EXISTS_SUCCESS,
  CHECK_USER_EXISTS_ERROR,
  CREATE_FINGERPRINT_INIT,
  CREATE_FINGERPRINT_SUCCESS,
  CREATE_FINGERPRINT_ERROR,
} from './types';

export const joinGroupInit = payload => ({
  type: JOIN_GROUP_INIT,
  payload,
});

export const joinGroupSuccess = payload => ({
  type: JOIN_GROUP_SUCCESS,
  payload,
});

export const joinGroupError = payload => ({
  type: JOIN_GROUP_ERROR,
  payload,
});

export const checkUserInit = payload => ({
  type: CHECK_USER_EXISTS_INIT,
  payload,
});

export const checkUserSuccess = payload => ({
  type: CHECK_USER_EXISTS_SUCCESS,
  payload,
});

export const checkUserError = payload => ({
  type: CHECK_USER_EXISTS_ERROR,
  payload,
});

export const createFingerPrintInit = payload => ({
  type: CREATE_FINGERPRINT_INIT,
  payload,
});

export const createFingerPrintSuccess = payload => ({
  type: CREATE_FINGERPRINT_SUCCESS,
  payload,
});

export const createFingerPrintError = payload => ({
  type: CREATE_FINGERPRINT_ERROR,
  payload,
});
