'use strict';

var assert = require('assert');

/**
 * 
 * 
 * @param  {} db
 */
function ArticleManager(db) {
    this.repository = require('../repository/article')(db);
}

/**
 * Find all document by query
 * 
 * @param  {} query
 * @param  {} callback
 *
 */
ArticleManager.prototype.findAll = function (query, callback) {
    this.repository.findAll(query, function (err, docs) {
        callback(err, docs);
    });
};

/**
 * Insert a document
 * 
 * @param  {} doc
 * @param  {} callback
 */
ArticleManager.prototype.insert = function (doc, callback) {
    this.repository.insert(doc, function (err, result) {
        if ( err || doc == null) {
            callback(new Error('Failed to insert doc'), null);
        } else {
            callback(err, result);
        }
    });
};

/**
 * Update a document
 * 
 * @param  {} doc
 * @param  {} callback
 */
ArticleManager.prototype.update = function (doc, callback) {
    this.repository.update(doc, function (err, result) {
        callback(err, result);
    });
};

/**
 * Remove a document
 * 
 * @param  {} doc
 * @param  {} callback
 */
ArticleManager.prototype.remove = function (doc, callback) {
    this.repository.remove(doc, function (err, result) {
        callback(err, result);
    });
};

module.exports = function(db) {
    return new ArticleManager(db);
};


