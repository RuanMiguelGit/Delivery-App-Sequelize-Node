const express = require('express');

const app = express();

const usersController = require('../controllers/usersController');
const salesController = require('../controllers/salesController');

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/users/all', usersController.getAllUsersSale);
app.get('/sales/user/all', salesController.getAllSalesUser);
app.get('/sales/products/all', salesController.getAllSalesProducts);
app.get('/customer/orders/:id', salesController.getSalesByUser);

module.exports = app;
