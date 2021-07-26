/* eslint-disable */
import React, { useState } from 'react';
import appContext from './appContext';

function Provider({ children }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const contextValue = {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
  };

  return (
    <appContext.Provider value={ contextValue }>
      {children}
    </appContext.Provider>
  );
}

export default Provider;
