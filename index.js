'use strict';

const joi = require('joi');

module.exports = function(schemas, options) {
  options = options || {};
  return function*(next) {
    try {
      for (let key in schemas) {
        this.request[key] = yield (function() {
          return function(cb) {
            joi.validate(this.request[key], schemas[key], options, cb);
          };
        })();
      }
      yield next;
    } catch (err) {
      err.status = 400;
      throw err;
    }
  };
};
