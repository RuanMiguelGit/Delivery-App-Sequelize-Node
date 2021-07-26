/* eslint-disable */
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import appContext from '../context/appContext';
import Input from '../components/Input';
import Button from '../components/Button';
import Error from '../components/Error';
import Products from './Products';
import Loading from '../components/Loading.js';
import '../Styles/Login.css';
import { useHistory, Redirect } from 'react-router-dom';
import { sendLogin } from '../services/apiRequest';
// import { saveUserInLocalStorage, getUserRole, getUserToken } from '../services/localStorage';

const Login = () => {
  const { setLoginEmail, setLoginPassword, loginEmail, loginPassword } = useContext(appContext);
  const [formValid, setValid] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [reqError, setReqError] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setReqError([]);
  }, [loginEmail, loginPassword]);

  const validEmail = (email) => {
    const emailRegex = new RegExp([
      '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()',
      '[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()',
      '[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$',
    ].join(''));
    return emailRegex.test(email);
  };

  useEffect(() => {
    !validEmail(loginEmail) || loginPassword.length < 6 ? setValid(true) : setValid(false);
  }, [loginEmail, loginPassword]);

  useEffect(() => {
    if (userInfo !== 0 && userInfo.role === 'customer') return history.push('/customer/products');
  }, [history, userInfo]);

  const SendLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    await sendLogin('http://localhost:3001/login', loginEmail, loginPassword)
      .then((res) => {
        console.log(res);
        setUserInfo(res.data.user);
      })
      .catch((error) => {
        setReqError(error.response.data.message);
      });

    setLoading(false);
  };

  const errorDisplay = () => {
    if (loading) {
      return <Loading />;
    } if (reqError.length > 0) {
      return <Error error={ reqError } testId="common_login__element-invalid-email" />;
      setLoading(false);
    }
    return null;
  };

  const Register = () => {
    history.push('/register');
  };
  return (

    <form>

      <label>
        <div className="form">
          <Input
            name="email"
            type="input"
            value={ loginEmail }
            change={ setLoginEmail }
            inputclass="input-back"
            testId="common_login__input-email"
          />
          <Input
            name="senha"
            type="password"
            value={ loginPassword }
            change={ setLoginPassword }
            inputclass="input-back"
            testId="common_login__input-password"
          />

          <Button onClick={ SendLogin } disable={ formValid } btnclass="LoginButton" name="Entrar" testId="common_login__button-login" />
          <Button onClick={ Register } disable={ false } btnclass="Noaccount" name="Ainda não tenho conta" testId="common_login__button-register" />
          {errorDisplay()}

        </div>
      </label>
      {/* {loading ? <Loading /> : reqError.length !== 0 ? <Error error={reqError}/> :''} */}

      {/* {loading ? <Loading />:<p>{reqError.map(item => item.message)}</p>} */}
    </form>
  );
};

export default Login;
