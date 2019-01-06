export default {
  createVoting: {
    steps: ['Загальна інформація', 'Коефіцієнти', 'Кандидати'],
    forms: {
      topicForm: {
        topic: 'Тема',
        votingStart: 'Дата початку',
        votingEnd: 'Дата кінця',
        votersPercent: 'Відсоток виборців',
      },
      weightForm: {
        name: 'Назва',
        cost: 'Величина',
        question: 'Питання',
      },
      candidatesForm: {
        name: 'Назва',
        description: 'Опис',
      },
    },
    buttons: {
      back: 'Назад',
      next: 'Вперед',
      finish: 'Завершити',
      addWeight: 'Додати коефіцієнт',
      addCandidate: 'Додати кандидата',
    },
    finishText: 'Голосування успішно створено!',
  },
  header: {
    createVoting: '+ Голосування',
    activityTitle: 'Активність',
    accountTitle: 'Профіль',
    logoutTitle: 'Вийти з аккаунта',
  },
  navSideBar: {
    new: 'Нові голосування',
    recent: 'Вже проголосували',
    all: 'Усі голосування',
    groupMembers: 'Учасники группы',
    votingsAvailiable: 'Доступні нові голосування!',
  },
  groupSideBar: {
    createGroup: 'Створити групу',
  },
  votingItem: {
    topic: 'Тема',
    votingStart: 'Дата початку',
    votingEnd: 'Дата кінця',
    votersPercent: 'Відсоток виборців',
    buttons: {
      vote: 'Голосувати',
      closeModal: 'Закрити',
    },
    vote: {
      candidateText: 'Виберіть кращого кандидата зі списку нижче',
      weightText: 'Дайте відповідь на питання щоб підрахувати величину вашого голосу',
      voteTitle: 'Ваш голос важливий для нас!',
      enterAnswer: 'Введіть відповідь',
    },
  },
  signIn: {
    title: 'Вхід в систему',
    createGroup: {
      title: 'Ви хочете ',
      link: 'створити групу?',
    },
    email: 'Електронна пошта',
    password: 'Пароль',
    buttonSignIn: 'Увійти',
    buttonScanFingerPrint: 'Сканувати відбиток',
    chooseLanguage: 'Виберіть мову',
  },
  createGroup: {
    title: 'Створити групу',
    signIn: {
      title: 'Вже є аккаунт?',
      link: 'Увійти!',
    },
    group: 'Назва групи',
    adminEmail: 'Ел пошта адміна',
    memberEmail: 'Ел пошта учасника',
    buttons: {
      addMember: 'Додати',
      createGroup: 'Створити групу',
      close: 'Закрити',
    },
    modal: {
      title: 'Група успішно створена!',
      description: 'Перевірте вашу електронну пошту для завершення створення групи. Використовуйте посилання в листі для реєстрації якщо у вас немає облікового запису або для підключення до нової групи',
    },
  },
  listVotings: {
    title: 'Слідкуйте за результатами голосування',
    noVotings: 'Будь ласка створіть голосування в своїй групі',
    buttons: {
      getResults: 'Результати',
      close: 'Закрити',
    },
    resultsTitle: 'Результати голосування',
    winner: 'Переможець',
    votesValue: 'Значення голосів',
    votesCount: 'Кількість голосів',
  },
  signUp: {
    title: 'Реєстрація',
    email: 'Електронна пошта',
    password: 'Пароль',
    firstName: `Ім'я`,
    lastName: 'Прізвище',
    nickName: `Ім'я користувача`,
    btnSignUp: 'Зареєструватися',
    buttonScanFingerPrint: 'Сканувати відбиток',
  },
  groupMembers: {
    title: 'Підтримуй контакт зі своїми співгрупниками',
    noMembers: 'Будь ласка додайте учасників в вашу групу',
  },
  notifications: {
    errorTitle: 'Помилка!',
    successTitle: 'Операція успішна!',
    join: {
      success: 'Успішно приєдналася до групи!',
    },
    signUp: {
      success: 'Успішно створили акаунт!',
    },
    scan: {
      success: 'Відбиток успішно відсканован!',
      error: 'Помилка під час сканування. Спробуйте пізніше',
    },
  },
  welcome: 'Ласкаво просимо в VoteUp!',
  activity: {
    loginActivity: 'Активність',
    votesActivity: 'Голосування',
    loginHeaders: ['Дата', 'IP', 'Браузер', 'ОС'],
    votesHeaders: ['Дата', 'Тема голосування', 'Кандидат'],
  },
  scanPopup: {
    header: 'Cканер відбитків пальців',
    description: 'Натисніть кнопку для сканування відбитка великого пальця',
    scanBtn: 'Сканувати',
    closeBtn: 'Закрити',
  },
};
