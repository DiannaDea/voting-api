export default {
  createVoting: {
    steps: ['Choose voting topic', 'Set coefficients', 'Add candidates'],
    forms: {
      topicForm: {
        topic: 'Topic*',
        votingStart: 'Voting start*',
        votingEnd: 'Voting end*',
        votersPercent: 'Voters percent*',
      },
      weightForm: {
        name: 'Name*',
        cost: 'Cost*',
        question: 'Question*',
      },
      candidatesForm: {
        name: 'Name*',
        description: 'Description*',
      },
    },
    buttons: {
      back: 'Back',
      next: 'Next',
      finish: 'Finish',
      addWeight: 'Add weight',
      addCandidate: 'Add candidate',
    },
    finishText: 'All steps completed - you are finished',
  },
  header: {
    createVoting: '+ Voting',
    activityTitle: 'Activity',
    accountTitle: 'Account',
    logoutTitle: 'Logout',
  },
  navSideBar: {
    new: 'New votings',
    recent: 'Recent votings',
    all: 'All votings',
    groupMembers: 'Group members',
    votingsAvailiable: 'New votings available',
  },
  groupSideBar: {
    createGroup: 'Create group',
  },
  votingItem: {
    topic: 'Topic',
    votingStart: 'Voting start',
    votingEnd: 'Voting end',
    votersPercent: 'Voters percent',
    buttons: {
      vote: 'Vote',
      closeModal: 'Close',
    },
    vote: {
      candidateText: 'Choose best candidate from the following list',
      weightText: 'Please answer the questions to calculate you vote weight!',
      voteTitle: 'You vote is neccessary for us!',
      enterAnswer: 'Enter you answer',
    },
  },
  signIn: {
    title: 'Sign in',
    createGroup: {
      title: 'Want to create group?',
      link: 'Create now!',
    },
    email: 'Email Address',
    chooseLanguage: 'Choose app language',
    password: 'Password',
    buttonScanFingerPrint: 'Scan fingerprint',
    buttonSignIn: 'Sign in',
  },
  createGroup: {
    title: 'Create group',
    signIn: {
      title: 'Have an account?',
      link: 'Sign in!',
    },
    group: 'Group name',
    adminEmail: 'Admin email',
    memberEmail: 'Member email',
    buttons: {
      addMember: 'Add',
      createGroup: 'Create group',
      close: 'Close',
    },
    modal: {
      title: 'Successfully created group!',
      description: 'Check your email to finish creating group. Use link in email to sign up if you don\'t have account and to join your group!',
    },
  },
  listVotings: {
    title: 'Follow your votings resuls',
    noVotings: 'Please create a voting in your group',
    buttons: {
      getResults: 'Results',
      close: 'Close',
    },
    resultsTitle: 'Voting results',
    winner: 'Winner',
    votesValue: 'Votes value',
    votesCount: 'Votes count',
  },
  signUp: {
    title: 'Sign up',
    email: 'Email',
    password: 'Password',
    firstName: 'First Name',
    lastName: 'Last Name',
    nickName: 'Nickname',
    btnSignUp: 'Sign up',
    buttonScanFingerPrint: 'Scan fingerprint',
  },
  groupMembers: {
    title: 'Get in touch with you group memebers',
    noMembers: 'Please add members to you group',
  },
  notifications: {
    errorTitle: 'Error!',
    successTitle: 'Success!',
    join: {
      success: 'Successfully joined group',
    },
    signUp: {
      success: 'Successfully created account',
    },
    scan: {
      success: 'Successfully scaned fingerprint',
      error: 'Error when scanning. User with such email doesn\'t exist',
    },
  },
  welcome: 'Welcome to VoteUp!',
  activity: {
    loginActivity: 'Login activity',
    votesActivity: 'Votes activity',
    loginHeaders: ['Date', 'IP', 'Browser', 'OS'],
    votesHeaders: ['Date', 'Topic', 'Candidate'],
  },
  scanPopup: {
    header: 'Scan your fingerprint',
    description: 'Click on button to scan you fingerprint',
    scanBtn: 'Scan',
    closeBtn: 'Close',
  },
};
