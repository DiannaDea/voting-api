import {
  GET_ONE_VOTING_INIT,
  GET_ONE_VOTING_SUCCESS,
  GET_ONE_VOTING_ERROR,
  GET_VOTING_CANDIDATES_INIT,
  GET_VOTING_CANDIDATES_SUCCESS,
  GET_VOTING_CANDIDATES_ERROR,
  CHECK_USER_CAN_VOTE_INIT,
  CHECK_USER_CAN_VOTE_SUCCESS,
  CHECK_USER_CAN_VOTE_ERROR,
} from './types';

export default (state, action) => ({
  [GET_ONE_VOTING_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [GET_ONE_VOTING_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastVoting: {
        ...state.fetchData.lastVoting,
        data: action.payload,
      },
    },
    error: null,
  }),
  [GET_ONE_VOTING_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastVoting: {
        ...state.fetchData.lastVoting,
        data: null,
      },
    },
    error: action.payload,
  }),
  [GET_VOTING_CANDIDATES_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [GET_VOTING_CANDIDATES_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastVoting: {
        ...state.fetchData.lastVoting,
        candidates: action.payload,
      },
    },
    error: null,
  }),
  [GET_VOTING_CANDIDATES_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastVoting: {
        ...state.fetchData.lastVoting,
        candidates: [],
      },
    },
    error: action.payload,
  }),
  [CHECK_USER_CAN_VOTE_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [CHECK_USER_CAN_VOTE_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastVoting: {
        ...state.fetchData.lastVoting,
        userVoted: action.payload,
      },
    },
    error: null,
  }),
  [CHECK_USER_CAN_VOTE_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastVoting: {
        ...state.fetchData.lastVoting,
        userVoted: false,
      },
    },
    error: action.payload,
  }),
});
