import {
  GET_USER_GROUPS_INIT,
  GET_USER_GROUPS_ERROR,
  GET_USER_GROUPS_SUCCESS,
  CHANGE_CURRENT_GROUP,
  LEAVE_GROUP_REQUEST,
  LEAVE_GROUP_SUCCESS,
  LEAVE_GROUP_ERROR,
} from './types';

export const getUserGroupsInit = payload => ({
  type: GET_USER_GROUPS_INIT,
  payload,
});

export const getUserGroupsSuccess = payload => ({
  type: GET_USER_GROUPS_SUCCESS,
  payload,
});

export const getUserGroupsError = payload => ({
  type: GET_USER_GROUPS_ERROR,
  payload,
});

export const changeCurrentGroup = payload => ({
  type: CHANGE_CURRENT_GROUP,
  payload,
});

export const leaveGroupInit = payload => ({
  type: LEAVE_GROUP_REQUEST,
  payload,
});

export const leaveGroupSuccess = payload => ({
  type: LEAVE_GROUP_SUCCESS,
  payload,
});

export const leaveGroupError = payload => ({
  type: LEAVE_GROUP_ERROR,
  payload,
});
