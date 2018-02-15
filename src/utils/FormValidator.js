
class FormValidator {

  static validateControl(control) {
    let isValid = true;
    const validationRules = control.validation;

    if (!validationRules) {
      return true;
    }

    if (validationRules.required) {
      isValid = control.value.trim() !== '' && isValid;
      if (!isValid)
        control.error = 'Pole wymagane. ';
    }
    control.valid = isValid;
    return isValid;
  }

  static validateAllControls(formControls) {
    let isValid = true;
    Object.keys(formControls).forEach(controlName => {
      const isControlValid = FormValidator.validateControl(formControls[controlName]);
      isValid = isControlValid && isValid;
    });
    return isValid;
  }
}
export default FormValidator;