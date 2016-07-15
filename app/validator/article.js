'use strict';

var validate = require('validate.js');

function ArticleValidator() {
    this.constraints = {
        title: {
            presence: true,
            length: {
                minimum: 5
            }
        },
        content: {
            presence: true,
            length: {
                minimum: 10
            }
        }
    };
}

/**
 * Validate an article
 * 
 * @param  {} article
 * 
 * @return {} errors or null
 */
ArticleValidator.prototype.validate = function ( article ) {
    console.log(article);
    return validate(article, this.constraints);
};

module.exports = new ArticleValidator();