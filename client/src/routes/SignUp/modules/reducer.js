import {
  JOIN_GROUP_INIT,
  JOIN_GROUP_SUCCESS,
  JOIN_GROUP_ERROR,
  CHECK_USER_EXISTS_INIT,
  CHECK_USER_EXISTS_SUCCESS,
  CHECK_USER_EXISTS_ERROR,
} from './types';

export default (state, action) => ({
  [JOIN_GROUP_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [JOIN_GROUP_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    status: action.payload === 'OK',
    error: null,
  }),
  [JOIN_GROUP_ERROR]: () => ({
    ...state,
    isFetching: false,
    status: false,
    error: action.payload,
  }),
  [CHECK_USER_EXISTS_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [CHECK_USER_EXISTS_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    userToCheck: action.payload,
    error: null,
  }),
  [CHECK_USER_EXISTS_ERROR]: () => ({
    ...state,
    isFetching: false,
    userToCheck: {},
    error: action.payload,
  }),
});
