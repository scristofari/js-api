"use strict";

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

module.exports = {
    open: function(req, res, next) {
        var config = req.app.get('config');

        MongoClient.connect(config.url, function(err, db) {
            assert.equal(null, err);
            req.db = db;
            next();
        });
    },
    close: function(req, res, next) {
        req.db.close();
        next();
    }
};