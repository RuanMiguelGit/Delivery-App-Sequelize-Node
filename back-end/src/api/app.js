const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const cors = require('cors');

app.use(cors());
app.use('/images', express.static(`${__dirname}/../../public`));
const usersController = require('../controllers/usersController');
const userController = require('../controllers/userController');
const salesController = require('../controllers/salesController');
const productsController = require('../controllers/productsController');

// Já estava no projeto desde o git clone ***VERIFICAR SE PODE TIRAR**
app.get('/coffee', (_req, res) => res.status(418).end());

// utilizado para testar as associações
app.get('/users/sale', usersController.getAllUsersSale);
app.get('/sales/user', salesController.getAllSalesUser);
app.get('/sales/products', salesController.getAllSalesProducts);
app.get('/products/sales', productsController.getAllProductsSales);
// ----------------------------------------------------------------------

// teste Franco
app.post('/sales', salesController.createSale);

// rotas validas
app.post('/login', userController.login);
app.post('/register', userController.register);
app.get('/products', productsController.getProducts);
app.post('/customer/orders', salesController.getSalesByUser);

module.exports = app;