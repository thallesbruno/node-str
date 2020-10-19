'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router(); //rotas da aplicação

mongoose.connect(
    'mongodb+srv://bruno:bruno@ndstr.6pwh5.azure.mongodb.net/<dbname>?retryWrites=true&w=majority'
);

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;