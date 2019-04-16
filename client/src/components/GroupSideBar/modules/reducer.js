import {
  GET_USER_GROUPS_INIT,
  GET_USER_GROUPS_SUCCESS,
  GET_USER_GROUPS_ERROR,
  CHANGE_CURRENT_GROUP,
  LEAVE_GROUP_REQUEST,
  LEAVE_GROUP_SUCCESS,
  LEAVE_GROUP_ERROR,
} from './types';

export default (state, action) => ({
  [GET_USER_GROUPS_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [GET_USER_GROUPS_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      all: action.payload,
      curGroupId: action.payload[0]._id,
    },
    error: null,
  }),
  [GET_USER_GROUPS_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      all: [],
      curGroupId: null,
    },
    error: action.payload,
  }),
  [CHANGE_CURRENT_GROUP]: () => ({
    ...state,
    fetchData: {
      all: state.fetchData.all,
      curGroupId: action.payload.newCurGroupId,
    },
  }),
  [LEAVE_GROUP_REQUEST]: () => ({
    ...state,
    isFetching: true,
  }),
  [LEAVE_GROUP_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      all: state.fetchData.all.filter(group => group._id !== action.payload.groupId),
      curGroupId: state.fetchData.all[0]._id,
    },
    error: null,
  }),
  [LEAVE_GROUP_ERROR]: () => ({
    ...state,
    isFetching: false,
  }),
});
