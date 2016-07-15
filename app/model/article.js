"use strict";

function Article() {
    this.title = "";  
    this.content = "";
    this.createdAt = Date.now;
    this.updatedAt = Date.now;
}

module.exports = new Article();


