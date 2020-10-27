'use strict';

const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router(); //rotas da aplicação

//Conecta ao banco
mongoose.connect(
    'mongodb+srv://bruno:bruno@ndstr.6pwh5.azure.mongodb.net/<dbname>?retryWrites=true&w=majority'
);

//Carrega os models
const Product = require('./models/product');
const Costumer = require('./models/costumer');
const Order = require('./models/order');

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

dotenv.config();

module.exports = app;