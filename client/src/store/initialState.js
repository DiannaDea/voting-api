import text from '../l10n/text';

const curLang = localStorage.getItem('lang') || 'en';

export default {
  groups: {
    fetchData: {
      all: [],
      curGroupId: '',
      lastGroup: {},
      curGroupMembers: [],
    },
    error: null,
  },
  votings: {
    fetchData: {
      new: [],
      recent: [],
      all: [],
      lastVoting: {
        data: null,
        candidates: [],
        userVoted: false,
      },
    },
    error: null,
  },
  user: {
    fetchData: {
      token: null,
      personalInfo: {},
    },
    error: null,
    confirmedFingerPrint: null,
  },
  joinGroup: {
    userToCheck: {},
    status: null,
    error: null,
  },
  appText: {
    lang: curLang,
    text: {
      ...text[curLang],
    },
  },
  votingResults: {
    results: {},
    error: null,
  },
  userActivity: {
    auth: [],
    votes: [],
    error: null,
  },
};
