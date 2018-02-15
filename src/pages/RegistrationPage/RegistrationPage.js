import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Card, CardBody, CardTitle, Form, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';

import FormElements from '../../components/UI/FormElements/FormElements';
import registrationFormConfig from './registrationFormConfig';
import './RegistrationPage.css';
import * as actions from './../../store/actions/index';
import FormValidator from './../../utils/FormValidator';

class RegistrationPage extends Component {

  state = {
    formControls: registrationFormConfig
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControl = {
      ...this.state.formControls[controlName],
      value: event.target.value,
    };

    const isValid = FormValidator.validateControl(updatedControl);
    const updatedControls = {
      ...this.state.formControls,
      [controlName]: {
        ...updatedControl
      }
    };
    
    this.setState({
      formControls: updatedControls,
      formIsValid: isValid
    });
  };

  submitFormHandler = (event) => {
    event.preventDefault();
    const updatedControls = { ...this.state.formControls };
    const isFormValid = FormValidator.validateAllControls(updatedControls);
    this.setState({
      formControls: updatedControls,
      formIsValid: isFormValid
    });

    if (this.state.formIsValid) {
      const registrationData = {
        username: this.state.formControls.login.value,
        password: this.state.formControls.password.value,
        email: this.state.formControls.email.value,
        verifyPassword: this.state.formControls.confirmPassword.value
      }
      this.props.register(registrationData);
    }
  };

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