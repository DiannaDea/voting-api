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

export default (state, action) => ({
  [SIGN_IN_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [SIGN_IN_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      token: action.payload.token,
    },
    error: null,
  }),
  [SIGN_IN_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      token: null,
    },
    error: action.payload,
  }),
  [SIGN_OUT]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      personalInfo: {},
      token: null,
    },
    error: state.error,
  }),
  [GET_USER_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [GET_USER_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      personalInfo: action.payload,
    },
    error: null,
  }),
  [GET_USER_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      personalInfo: {},
    },
    error: action.payload,
  }),
  [SIGN_UP_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [SIGN_UP_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      personalInfo: action.payload.user,
    },
    error: null,
  }),
  [SIGN_UP_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      personalInfo: {},
    },
    error: action.payload,
  }),
  [SCAN_FINGERPRINT_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [SCAN_FINGERPRINT_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    confirmedFingerPrint: action.payload,
  }),
  [SCAN_FINGERPRINT_ERROR]: () => ({
    ...state,
    isFetching: false,
    confirmedFingerPrint: false,
  }),
});
