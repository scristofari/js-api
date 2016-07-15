'use strict';

var request = require('supertest');
var express = require('express');

var kernel = require('../../app/kernel');
kernel.bootstrap();

describe('[Fonctionnal] GET /api/v1/articles', function() {
  it('respond with json and statusOK 200', function(done) {
    request(kernel.app)
      .get('/api/v1/articles')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});