const loginFormConfig = {
  login: {
    type: 'text',
    label: 'Nazwa użytkownika:',
    placeholder: 'Wprowadź nazwę użytkownika',
    value: '',
    validation: {
      required: true
    }
  },
  password: {
    type: 'password',
    label: 'Hasło:',
    placeholder: 'Wprowadź hasło',
    value: '',
    validation: {
      required: true
    }
  }
};

export default loginFormConfig;
