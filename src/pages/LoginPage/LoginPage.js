import React, { Component } from 'react';
import loginFormConfig from './loginFormConfig';
import FormElements from '../../components/UI/FormElements/FormElements';
import { Card, CardBody, CardTitle, Form, Button } from 'reactstrap';
import './LoginPage.css';

class LoginPage extends Component {

  render() {
    return (
      <Card className="login-card">
        <CardBody>
          <CardTitle className="text-center">Logowanie</CardTitle>
          <Form>
            <FormElements config={loginFormConfig} />
            <Button color="success" className="float-right">Zaloguj się </ Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default LoginPage;