export default {
  createVoting: {
    steps: ['Общая информация о голосовании', 'Укажите коеффициенты', 'Добавьте кандидатов'],
    forms: {
      topicForm: {
        topic: 'Тема',
        votingStart: 'Дата начала',
        votingEnd: 'Дата конца',
        votersPercent: 'Процент проголосовавших',
      },
      weightForm: {
        name: 'Название',
        cost: 'Величина',
        question: 'Вопрос',
      },
      candidatesForm: {
        name: 'Название',
        description: 'Описание',
      },
    },
    buttons: {
      back: 'Назад',
      next: 'Вперед',
      finish: 'Завершить',
      addWeight: 'Добавить коеффициент',
      addCandidate: 'Добавить кандидата',
    },
    finishText: 'Создание голосования успешно завершено!',
  },
  header: {
    createVoting: 'Создать голосование',
    activityTitle: 'Активность',
    accountTitle: 'Профиль',
    logoutTitle: 'Выйти из аккаунта',
  },
  navSideBar: {
    new: 'Новые голосования',
    recent: 'Недавние голосования',
    all: 'Все голосования',
    groupMembers: 'Участники группы',
    votingsAvailiable: 'Доступны новые голосования!',
  },
  groupSideBar: {
    createGroup: 'Создать группу',
  },
  votingItem: {
    topic: 'Тема',
    votingStart: 'Дата начала',
    votingEnd: 'Дата конца',
    votersPercent: 'Процент проголосовавших',
    buttons: {
      vote: 'Голосовать',
      closeModal: 'Закрыть',
    },
    vote: {
      candidateText: 'Выберите лучшего кандидата из списка ниже',
      weightText: 'Ответьте на вопросы чтобы подсчитать величину вашего голоса',
      voteTitle: 'Ваш голос важен для нас!',
      enterAnswer: 'Введите ответ',
    },
  },
  signIn: {
    title: 'Вход в систему',
    createGroup: {
      title: 'Хотите ',
      link: 'создать группу?',
    },
    email: 'Электронная почта',
    password: 'Пароль',
    buttonSignIn: 'Войти',
    buttonScanFingerPrint: 'Сканировать отпечаток',
    chooseLanguage: 'Выберите язык',
  },
  createGroup: {
    title: 'Создать группу',
    signIn: {
      title: 'Уже есть аккаунт?',
      link: 'Войти!',
    },
    group: 'Название группы',
    adminEmail: 'Эл почта админа',
    memberEmail: 'Эл почта участника',
    buttons: {
      addMember: 'Добавить',
      createGroup: 'Создать группу',
      close: 'Закрыть',
    },
    modal: {
      title: 'Группа успешно создана!',
      description: 'Проверьте вашу электронную почту для завершения создания группы. Используйте ссылку в письме для регистрации, если у вас нет аккаунта или для подключения к новой группе',
    },
  },
  listVotings: {
    title: 'Следите за результатами голосования',
    noVotings: 'Пожалуйста создайте голосование в своей группе',
    buttons: {
      getResults: 'Результаты',
      close: 'Закрыть',
    },
    resultsTitle: 'Результаты голосования',
    winner: 'Победитель',
    votesValue: 'Значение голосов',
    votesCount: 'Количество голосов',
  },
  signUp: {
    title: 'Регистрация',
    email: 'Электронная почта',
    password: 'Пароль',
    firstName: 'Имя',
    lastName: 'Фамилия',
    nickName: 'Имя пользователя',
    btnSignUp: 'Зарегистрироваться',
  },
  groupMembers: {
    title: 'Поддерживай контакт со своими согруппниками',
    noMembers: 'Пожалуйста добавьте участников в вашу группу',
  },
  notifications: {
    errorTitle: 'Ошибка!',
    successTitle: 'Операция успешна!',
    join: {
      success: 'Successfully joined group',
    },
    signUp: {
      success: 'Successfully created account',
    },
    scan: {
      success: 'Successfully scaned fingerprint',
      error: 'Error when scanning. Please try later',
    },
  },
  welcome: 'Добро пожаловать в VoteUp!',
  activity: {
    loginActivity: 'Активность',
    votesActivity: 'Голосования',
    loginHeaders: ['Дата', 'IP', 'Браузер', 'ОС'],
    votesHeaders: ['Дата', 'Тема голосования', 'Кандидат'],
  },
  scanPopup: {
    header: 'Scan your fingerprint',
    description: 'Click on button to scan you fingerprint',
    scanBtn: 'Scan',
    closeBtn: 'Close',
  },
};
