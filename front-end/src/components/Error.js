/* eslint-disable */
import React from 'react';
import '../Styles/Login.css';

export default function Error({ error, testId }) {
  const errorManagement = () => {
    if (error.length !== 0) {
      return (
        <p className="error" data-testid={ testId }>
          {error}
        </p>);
    }
    return '';
  };

  return (

    errorManagement()
  );
}
