import React, { Component } from 'react';
import loginFormConfig from './loginFormConfig';
import FormElements from '../../components/UI/FormElements/FormElements';
import { Card, CardBody, CardTitle, Form, Button } from 'reactstrap';
import './LoginPage.css';

class LoginPage extends Component {

  state = {
    formControls: loginFormConfig
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
  }

  render() {
    return (
      <Card className="login-card">
        <CardBody>
          <CardTitle className="text-center">Logowanie</CardTitle>
          <Form>
            <FormElements 
              config={this.state.formControls} 
              onChange={this.inputChangedHandler}/>
            <Button color="success" className="float-right">Zaloguj się </ Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default LoginPage;