import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Card, CardBody, CardTitle, Form, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';

import FormElements from '../../components/UI/FormElements/FormElements';
import registrationFormConfig from './registrationFormConfig';
import './RegistrationPage.css';
import * as actions from './../../store/actions/index';
import InputValidator from './../../utils/InputValidator';

class RegistrationPage extends Component {

  state = {
    formControls: registrationFormConfig
  }

  inputChangedHandler = (event, controlName) => {

    const validationResults =
      InputValidator.validate(
        event.target.value,
        this.state.formControls[controlName].validation
      );

    const updatedControls = {
      ...this.state.formControls,
      [controlName]: {
        ...this.state.formControls[controlName],
        value: event.target.value,
        valid: validationResults.isValid,
        error: validationResults.errorMessage
      }
    };
    this.setState({ formControls: updatedControls });
  };

  submitFormHandler = (event) => {
    event.preventDefault();

    if (this.validateForm()) {
      const registrationData = {
        username: this.state.formControls.login.value,
        password: this.state.formControls.password.value,
        email: this.state.formControls.email.value,
        verifyPassword: this.state.formControls.confirmPassword.value
      }
      this.props.register(registrationData);
    }
  };

  validateForm() {
    let isValid = true;
    let updatedControls = { ...this.state.formControls };

    Object.keys(this.state.formControls).forEach(controlName => {
      const validationResults =
        InputValidator.validate(
          this.state.formControls[controlName].value,
          this.state.formControls[controlName].validation
        );
      isValid = validationResults.isValid && isValid;
      updatedControls = {
        ...updatedControls,
        [controlName]: {
          ...updatedControls[controlName],
          valid: validationResults.isValid,
          error: validationResults.errorMessage
        }
      };
    });
    this.setState({ formControls: updatedControls });
    return isValid;
  }

  render() {
    const registrationForm = (
      <Form onSubmit={this.submitFormHandler}>
        <FormElements
          config={this.state.formControls}
          onChange={this.inputChangedHandler}
        />
        <div className="text-right">
          <Button
            color="primary"
          >Zarejestruj się</ Button>
        </div>
      </Form>
    );

    let alert = null;
    if (this.props.registrationSuccess) {
      alert = (
        <Alert color="success">
          Rejestracja przebiegła pomyślnie!
        </Alert>
      );
    } else if (this.props.error) {
      alert = (
        <Alert color="danger">
          {this.props.error}
        </Alert>
      )
    }

    return (
      <Card className="registration-card">
        <CardBody>
          <CardTitle className="text-center">Rejestracja</CardTitle>
          {alert}
          {!this.props.registrationSuccess && registrationForm}
        </CardBody>
      </Card>
    );
  }
}

RegistrationPage.propTypes = {
  register: PropTypes.func,
  registrationSuccess: PropTypes.bool,
  error: PropTypes.string
}

const mapStateToProps = state => {
  return {
    registrationSuccess: state.registration.registrationSuccess,
    error: state.registration.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: (registrationData) => dispatch(actions.register(registrationData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);