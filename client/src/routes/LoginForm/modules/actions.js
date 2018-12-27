import {
  SIGN_IN_INIT,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT,
  GET_USER_INIT,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  SIGN_UP_INIT,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SCAN_FINGERPRINT_INIT,
  SCAN_FINGERPRINT_SUCCESS,
  SCAN_FINGERPRINT_ERROR,
} from './types';

export const signInInit = payload => ({
  type: SIGN_IN_INIT,
  payload,
});

export const signInSuccess = payload => ({
  type: SIGN_IN_SUCCESS,
  payload,
});

export const signInError = payload => ({
  type: SIGN_IN_ERROR,
  payload,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const getUserInit = payload => ({
  type: GET_USER_INIT,
  payload,
});

export const getUserSuccess = payload => ({
  type: GET_USER_SUCCESS,
  payload,
});

export const getUserError = payload => ({
  type: GET_USER_ERROR,
  payload,
});

export const signUpInit = payload => ({
  type: SIGN_UP_INIT,
  payload,
});

export const signUpSuccess = payload => ({
  type: SIGN_UP_SUCCESS,
  payload,
});

export const signUpError = payload => ({
  type: SIGN_UP_ERROR,
  payload,
});

export const scanFingerPrintInit = payload => ({
  type: SCAN_FINGERPRINT_INIT,
  payload,
});

export const scanFingerPrintSuccess = payload => ({
  type: SCAN_FINGERPRINT_SUCCESS,
  payload,
});

export const scanFingerPrintError = payload => ({
  type: SCAN_FINGERPRINT_ERROR,
  payload,
});
