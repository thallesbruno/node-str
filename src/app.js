'use strict';

const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const router = express.Router(); //rotas da aplicação

//Carrega as rotas
const index.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.post('/post', (req, res, next) => {
    res.status(202).send({
        title: "Testando o POST",
        version: "0.0.1",
        info: "Criando..."
    });
});

router.put('/put', (req, res, next) => {
    res.status(428).send({
        title: "Testando o PUT",
        version: "0.0.1",
        info: "Alterando por PUT"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

app.use('/', route);
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);

module.exports = app;