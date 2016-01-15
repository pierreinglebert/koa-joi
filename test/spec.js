'use strict';

var request = require('supertest'),
  koa = require('koa'),
  bodyParser = require('koa-bodyparser'),
  joi = require('joi'),
  validate = require('..');

describe('koa-joi', function() {

  var app;

  beforeEach(function() {
    app = koa();

    app.use(bodyParser());
    app.use(validate({
      body: {
        test: joi.number().required()
      }
    }));

  });

  it('should reject an invalid request', function(done) {
    request(app.listen())
      .post('/')
      .send({ fail: 'fail' })
      .expect(400)
      .end(done);
  });

  it('should accept a valid request', function(done) {
    request(app.listen())
      .post('/')
      .send({ test: 1 })
      .expect(404)
      .end(done);
  });

});
