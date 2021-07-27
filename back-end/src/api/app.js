const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const cors = require('cors');

app.use(cors());
app.use('/images', express.static(`${__dirname}/images`));
const usersController = require('../controllers/usersController');
const userController = require('../controllers/userController');
const salesController = require('../controllers/salesController');

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/users/all', usersController.getAllUsersSale);
app.get('/sales/user/all', salesController.getAllSalesUser);
app.get('/sales/products/all', salesController.getAllSalesProducts);
app.get('/customer/orders/:id', salesController.getSalesByUser);

module.exports = app;
