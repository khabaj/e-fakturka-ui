import React from 'react';
import { Input, FormGroup, Label, FormFeedback } from 'reactstrap';
import { PropTypes } from 'prop-types';

const FormElements = (props) => {

  const formElements = Object.keys(props.config)
    .map(controlKey => {
      const control = props.config[controlKey]
      return (
        <FormGroup key={controlKey}>
          {control.label && <Label for={control.name}>{control.label}</Label>}
          <Input
            id={controlKey}
            type={control.type}
            placeholder={control.placeholder}
            value={control.value}
            onChange={event => props.onChange(event, controlKey)}
            valid={control.valid}
          />
          <FormFeedback>{control.error}</FormFeedback>
        </FormGroup>
      );
    });
  return formElements;
};

FormElements.propTypes = {
  config: PropTypes.objectOf(PropTypes.shape({
    type: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string
  })).isRequired
}

export default FormElements;