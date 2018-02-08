import React from 'react';
import { Input, FormGroup, Label } from 'reactstrap';
import { PropTypes } from 'prop-types';

const FormElements = (props) => {

  const formElements = props.config.map(elConfig => {
    return (
      <FormGroup key={elConfig.name}>
        {elConfig.label && <Label for={elConfig.name}>{elConfig.label}</Label>}
        <Input
          id={elConfig.name}
          type={elConfig.type}
          placeholder={elConfig.placeholder}
        />
      </FormGroup>
    );
  });
  return formElements;
};

FormElements.propTypes = {
  config: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string
  })).isRequired
}

export default FormElements;