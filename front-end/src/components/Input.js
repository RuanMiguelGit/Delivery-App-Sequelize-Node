/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ testId, type, name, value, change, inputclass }) {
  return (
    <input
      type={ type }
      placeholder={ name }
      value={ value }
      onChange={ (e) => change(e.target.value) }
      className={ inputclass }
      data-testid={ testId }
    />
  );
}

Input.propTypes = {
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  inputclass: PropTypes.string.isRequired,

};
