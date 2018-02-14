const registrationFormConfig = {
  login: {
    type: 'text',
    label: 'Nazwa użytkownika*:',
    placeholder: 'Wprowadź nazwę użytkownika',
    value: '',
    validation: {
      required: true
    }
  },
  email: {
    type: 'email',
    label: 'E-mail:',
    placeholder: 'Wprowadź adres e-mail',
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
  },
  confirmPassword: {
    type: 'password',
    label: 'Powtórz hasło:',
    placeholder: 'Powtórz hasło',
    value: '',
    validation: {
      required: true
    }
  }
};

export default registrationFormConfig;
