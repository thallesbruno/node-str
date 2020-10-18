'use strict'

//console.log('Testando');

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');
const { Console } = require('console');
//const { version } = require('os');

const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
const router = express.Router(); //rotas da aplicação

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

app.use('/', route);

server.listen(port);
server.on('error', onError);

console.log(`API rodando na porta ${port}`);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port:
        'Port ' + port;
    
    switch (error.code) {
        case 'EACCESS':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        
        case 'EADDINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        
        default:
            throw error;
    }
}