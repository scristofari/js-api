"use strict";

var _ = require('lodash'),
    articleValidator = require('../validator/article');

function ArticleController() {}

ArticleController.prototype.list = function(req, res, next) {
    var manager = require('../manager/article')(req.db);
    manager.findAll({}, function(err, docs) {
        res.status = 200;
        res.json(docs);
        next();
    });
};

ArticleController.prototype.post = function(req, res, next) {
    var article = require('../model/article');
    var manager = require('../manager/article')(req.db);

    // assign body to the model.
    _.assignIn(article, req.body);

    // validate the article.
    var errors = articleValidator.validate(article);
    if ( errors ) {
        res.status(400);
        res.json(errors);
        next();
    }

    manager.insert(article, function(err, doc) {
        res.json(doc);
        next();
    });
};

module.exports = new ArticleController();