/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';

function Provider({ children }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [cart, setCart] = useState([]);

  const contextValue = {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    cart,
    setCart,
  };

  return (
    <appContext.Provider value={ contextValue }>
      {children}
    </appContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
