/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import { sendRegister } from '../services/apiRequest';
import '../Styles/Login.css';
import Button from '../components/Button';
import Error from '../components/Error';
import Loading from '../components/Loading';

const six = 6;
const Twelve = 12;
const Registro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerInfo, setRegisterInfo] = useState([]);
  const [registerError, setRegisterError] = useState([]);
  const [role] = useState('customer');
  const [loading, setLoading] = useState(false);
  const [formValid, setValid] = useState(true);

  const history = useHistory();
  const validEmail = () => {
    const emailRegex = new RegExp([
      '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()',
      '[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()',
      '[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$',
    ].join(''));
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (!validEmail() || password.length < six || name.length < Twelve) {
      return setValid(true);
    }
    return setValid(false);

    // !validEmail(email) || password.length < six
    // || name.length < Twelve ? setValid(true) : setValid(false);
  }, [name, email, password]);

  useEffect(() => {
    if (registerInfo !== 0
    && registerInfo.role === 'customer') return history.push('/customer/products');
  }, [registerInfo]);

  const registration = async () => {
    setLoading(true);
    await sendRegister(name, email, password, role)
      .then((res) => {
        setRegisterInfo(res.data.newUser);
      })
      .catch((error) => {
        setRegisterError(error.response.data.message);
      });
    setLoading(false);
  };

  useEffect(() => {
    setRegisterError([]);
  }, [name, email]);

  const errorDisplay = () => {
    if (loading) {
      return <Loading />;
    } if (registerError.length > 0) {
      return (<Error
        error={ registerError }
        testId="common_register__element-invalid_register"
      />);
    }
    return null;
  };

  return (
    <div>
      <form>
        <div className="form">
          <Input
            name="name"
            type="input"
            value={ name }
            change={ setName }
            inputclass="input-back"
            testId="common_register__input-name"

          />
          <Input
            name="email"
            type="email"
            value={ email }
            change={ setEmail }
            inputclass="input-back"
            testId="common_register__input-email"
          />
          <Input
            name="senha"
            type="password"
            value={ password }
            change={ setPassword }
            inputclass="input-back"
            testId="common_register__input-password"

          />

          <Button
            onClick={ registration }
            disable={ formValid }
            btnclass="LoginButton"
            name="Finalizar"
            type="button"
            testId="common_register__button-register"
          />
          {errorDisplay()}
        </div>
      </form>
    </div>
  );
};

export default Registro;
