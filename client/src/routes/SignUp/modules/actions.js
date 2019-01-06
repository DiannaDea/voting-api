import {
  JOIN_GROUP_INIT,
  JOIN_GROUP_SUCCESS,
  JOIN_GROUP_ERROR,
  CHECK_USER_EXISTS_INIT,
  CHECK_USER_EXISTS_SUCCESS,
  CHECK_USER_EXISTS_ERROR,
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
