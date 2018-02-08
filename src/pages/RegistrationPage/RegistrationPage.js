import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Form, Button } from 'reactstrap';
import FormElements from '../../components/UI/FormElements/FormElements';
import registrationFormConfig from './registrationFormConfig';
import './RegistrationPage.css';

class RegistrationPage extends Component {

  render() {
    return (
      <Card className="registration-card">
        <CardBody>
          <CardTitle className="text-center">Rejestracja</CardTitle>
          <Form>
            <FormElements config={registrationFormConfig} />
            <Button color="primary" className="float-right">Zarejestruj się</ Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default RegistrationPage;