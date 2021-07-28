/* eslint-disable */
const axios = require('axios');

export const getData = async (url) => {
  const products = await axios.get(url)
    .then((res) => {
      // console.log(res);
      // console.log(res.data);
      return res.data;
    })
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

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',

    },
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

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',

    },
  };
  const response = await axios.post('http://localhost:3001/register', data, axiosConfig);

  return response;
};
