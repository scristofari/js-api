"use strict";

var express = require('express'),
    util = require('util'),
    bodyParser = require('body-parser'),
    logger = require('./utils/logger'),
    config = require('./config.json'),
    articleController = require('./controller/article'),
    dbMiddleware = require('./middleware/db'),
    app = express();

function Kernel() {
    this.app = app;
    this.config = config;
    this.app.set('config', config);
}   

Kernel.prototype.middleware = function() {
    this.app.use(bodyParser.json());
};

Kernel.prototype.routing = function() {
    logger.log('debug', "Routing !");
    
    this.app.all('/*', dbMiddleware.open);

    this.app.get('/api/v1/articles', articleController.list);
    this.app.post('/api/v1/articles', articleController.post);

    this.app.all('/*', dbMiddleware.close);
};

Kernel.prototype.listen = function() {
    logger.log('info', util.format("Listening on port '%d' !", this.config.port));
    this.app.listen(this.config.port);
};

Kernel.prototype.bootstrapAndListen = function() {
    logger.log('info', 'Bootstrap the app !');

    this.middleware();
    this.routing();
    this.listen();
};

Kernel.prototype.bootstrap = function() {
    logger.log('info', 'Bootstrap the app !');
    this.middleware();
    this.routing();
};

module.exports = new Kernel();