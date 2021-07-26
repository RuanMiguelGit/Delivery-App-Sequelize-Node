/* eslint-disable */
import React from 'react';

export default function InputCheckBox({ boxClass, title, type, name, value, change, inputclass }) {
  const changeHangler = (e) => {
    if (e.target.type === 'checkbox' && !e.target.checked) {
      change({ checked: '' });
    } else {
      change({ checked: e.target.value });
    }
  };

  return (
    <div className={ boxClass }>
      <label htmlFor={ title }>{title}</label>
      <input
        type={ type }
        placeholder={ name }
        checked={ value }
        onChange={ changeHangler }
        className={ inputclass }
      />
    </div>
  );
}
