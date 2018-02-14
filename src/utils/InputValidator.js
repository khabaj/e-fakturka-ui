
class InputValidator {

  static validate(value, rules) {

    const validationResult = {
      isValid: true,
      errorMessage: ''
    };

    if (!rules) {
      return true;
    }

    if (rules.required) {
      validationResult.isValid = value.trim() !== '' && validationResult.isValid;
      if(!validationResult.isValid)
        validationResult.errorMessage += 'Pole wymagane. ';
    }

    return validationResult;
  }
}

export default InputValidator;