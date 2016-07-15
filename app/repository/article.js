'use strict';

/**
 * 
 * 
 * @param  {} db
 */
function ArticleRepository(db) {
    this.collection = db.collection('article');
}

/**
 * Find all document by query
 * 
 * @param  {} query
 * @param  {} callback
 */
ArticleRepository.prototype.findAll = function (query, callback) {
    this.collection.find(query).toArray(function (err, docs) {
        callback(err, docs);
    });
};

/**
 * Insert a document
 * 
 * @param  {} doc
 * @param  {} callback
 */
ArticleRepository.prototype.insert = function (doc, callback) {
    this.collection.insertOne(doc, function (err, result) {
        callback(err, result);
    });
};

/**
 * Update a document
 * 
 * @param  {} doc
 * @param  {} callback
 */
ArticleRepository.prototype.update = function (doc, callback) {
    this.collection.updateOne(doc, { $set: doc._id }, function (err, result) {
        callback(err, result);
    });
};

/**
 * Remove a document
 * 
 * @param  {} doc
 * @param  {} callback
 */
ArticleRepository.prototype.remove = function (doc, callback) {
    this.collection.deleteOne(doc, function (err, result) {
        callback(err, result);
    });
};

module.exports = function(db) {
    return new ArticleRepository(db);
}


