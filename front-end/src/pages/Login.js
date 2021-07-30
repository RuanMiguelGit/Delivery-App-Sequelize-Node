/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import appContext from '../context/appContext';
import Input from '../components/Input';
import Button from '../components/Button';
import Error from '../components/Error';
import Loading from '../components/Loading';
import '../Styles/Login.css';
import { sendLogin } from '../services/apiRequest';
import { saveUserInLocalStorage } from '../services/localStorage';

const six = 6;
const Login = () => {
  const {
    setLoginEmail,
    setLoginPassword,
    loginEmail,
    loginPassword } = useContext(appContext);

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
    if (!validEmail(loginEmail) || loginPassword.length < six) {
      return setValid(true);
    }
    return setValid(false);
  }, [loginEmail, loginPassword]);

  useEffect(() => {
    if (userInfo.role === 'customer') return history.push('/customer/products');
    if (userInfo.role === 'seller') return history.push('/seller/orders');
  }, [history, loginEmail, userInfo]);

  const SendLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    await sendLogin('http://localhost:3001/login', loginEmail, loginPassword)
      .then((res) => {
        console.log(res);
        setUserInfo(res.data.user);
        saveUserInLocalStorage(res.data.user);
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
    }
    return null;
  };

  const Register = () => {
    history.push('/register');
  };
  return (
    <form>
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

        <Button
          onClick={ SendLogin }
          disable={ formValid }
          btnclass="LoginButton"
          name="Entrar"
          testId="common_login__button-login"
        />
        <Button
          onClick={ Register }
          disable={ false }
          btnclass="Noaccount"
          name="Ainda não tenho conta"
          testId="common_login__button-register"
        />
        {errorDisplay()}

      </div>

    </form>
  );
};

export default Login;
