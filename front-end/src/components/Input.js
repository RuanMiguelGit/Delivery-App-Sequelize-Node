/* eslint-disable */
import React from 'react';

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
