import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Form, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';

import FormElements from '../../components/UI/FormElements/FormElements';
import loginFormConfig from './loginFormConfig';
import './LoginPage.css';
import * as actions from './../../store/actions/index';
import FormValidator from './../../utils/FormValidator';

class LoginPage extends Component {

  state = {
    formControls: loginFormConfig
  }

  inputChangedHandler = (event, controlName) => {

    const updatedControl = {
      ...this.state.formControls[controlName],
      value: event.target.value
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
      formIsValid: isValid && this.state.isFormValid
    });
  }

  loginHandler = (event) => {
    event.preventDefault();

    const updatedControls = { ...this.state.formControls };
    const isFormValid = FormValidator.validateAllControls(updatedControls);

    this.setState({
      formControls: updatedControls,
      formIsValid: isFormValid
    });

    if (isFormValid) {
      const loginData = {
        login: this.state.formControls.login.value,
        password: this.state.formControls.password.value
      }
      this.props.login(loginData);
    }
  };

  render() {

    let authRedirect = null;

    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to='/' />
    }

    return (
      <React.Fragment>
        {authRedirect}
        <Card className="login-card">
          <CardBody>
            <CardTitle className="text-center">Logowanie</CardTitle>
            <Form onSubmit={this.loginHandler}>
              <FormElements
                config={this.state.formControls}
                onChange={this.inputChangedHandler} />
              <div className="text-right">
                <Button color="success" className="float-right">Zaloguj się </ Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (loginData) => dispatch(actions.login(loginData))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);