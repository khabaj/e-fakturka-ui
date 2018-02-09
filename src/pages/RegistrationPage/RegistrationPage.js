import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Form, Button } from 'reactstrap';
import FormElements from '../../components/UI/FormElements/FormElements';
import registrationFormConfig from './registrationFormConfig';
import './RegistrationPage.css';

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
  }

  render() {
    return (
      <Card className="registration-card">
        <CardBody>
          <CardTitle className="text-center">Rejestracja</CardTitle>
          <Form>
            <FormElements
              config={this.state.formControls}
              onChange={this.inputChangedHandler}
            />
            <Button color="primary" className="float-right">Zarejestruj się</ Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default RegistrationPage;