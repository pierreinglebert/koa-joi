'use strict';

const joi = require('joi');

module.exports = function(schemas, options) {
  options = options || {};
  return function*(next) {
    try {
      const request = this.request;
      for (let key in schemas) {
        const result = yield (function() {
          return function(cb) {
            joi.validate(request[key], schemas[key], options, cb);
          };
        })();
        request[key] = result;
        if (key === 'query') {
          request._querycache[request.querystring] = result;
        }
      }
      yield next;
    } catch (err) {
      err.status = 400;
      throw err;
    }
  };
};
