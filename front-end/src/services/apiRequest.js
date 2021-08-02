import { getUserToken } from './localStorage';

/* eslint-disable */
const axios = require('axios');

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    authorization: getUserToken(),

  },
};
export const getData = async (url) => {
  const products = await axios.get(url)
    .then((res) => res.data)
    .then((data) => data)
    .catch((err) => {
      console.log('deu ruim', err);
    });

  return products;
};

export const sendLogin = async (url, email, password) => {
  const data = {
    email,
    password,
  };

  const response = await axios.post(url, data, axiosConfig);

  return response;
};

export const sendRegister = async (name, email, password, role) => {
  const data = {
    name,
    email,
    password,
    role,
  };

  const response = await axios.post('http://localhost:3001/register', data, axiosConfig);

  return response;
};

export const requestUser = async (url, email) => {
  const data = {
    email,
  };

  const response = await axios.post(url, data, axiosConfig);

  return response;
};
