const express = require('express');

const app = express();

const productsController = require('../controllers/productsController');

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/products', productsController.getAll);

module.exports = app;
