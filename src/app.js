'use strict';

const express = require('express');

const app = express();
const router = express.Router(); //rotas da aplicação

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

router.post('/post', (req, res, next) => {
    res.status(201).send({
        title: "Testando o POST",
        version: "0.0.1",
        info: "Criando..."
    });
});

router.put('/put', (req, res, next) => {
    res.status(428).send({
        title: "Testando o PUT",
        version: "0.0.1",
        info: ""
    });
});

app.use('/', route);

module.exports = app;