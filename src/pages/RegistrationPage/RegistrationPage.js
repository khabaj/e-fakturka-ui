import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Card, CardBody, CardTitle, Form, Button } from 'reactstrap';
import { connect } from 'react-redux';

import FormElements from '../../components/UI/FormElements/FormElements';
import registrationFormConfig from './registrationFormConfig';
import './RegistrationPage.css';
import * as actions from './../../store/actions/index';

class RegistrationPage extends Component {

  state = {
    formControls: registrationFormConfig
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.formControls,
      [controlName]: {
        ...this.state.formControls[controlName],
        value: event.target.value
      }
    };
    this.setState({ formControls: updatedControls });
  };

  submitFormHandler = (event) => {
    event.preventDefault();
    const registrationData = {
      username: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      email : this.state.formControls.email.value,
      verifyPassword: this.state.formControls.confirmPassword.value
    }
    this.props.register(registrationData);
  };

  render() {
    return (
      <Card className="registration-card">
        <CardBody>
          <CardTitle className="text-center">Rejestracja</CardTitle>
          <Form onSubmit={this.submitFormHandler}>
            <FormElements
              config={this.state.formControls}
              onChange={this.inputChangedHandler}
            />
            <Button
              color="primary"
              className="float-right"
              >Zarejestruj się</ Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

RegistrationPage.propTypes = {
  register: PropTypes.func
}

const mapDispatchToProps = dispatch => {
  return {
    register: (registrationData) => dispatch(actions.register(registrationData))
  };
};

export default connect(null, mapDispatchToProps)(RegistrationPage);