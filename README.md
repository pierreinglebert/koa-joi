koa-joi
=======

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devDep-image]][devDep-url]

Joi validation koa middleware

# Installation

```
npm install koa-joi
```

# Example

```javascript
var joi = require('joi');
var validate = require('koa-joi');

router.post('/user', validate({
	headers: joi.object.keys({
		customHeader: joi.string().regex(/[a-zA-Z0-9]{3,30}/)
	},
	body: joi.object.keys({
		username: joi.string().regex(/[a-zA-Z0-9]{3,30}/),
		profile: joi.string()
	})
}));

```

[npm-image]: https://img.shields.io/npm/v/koa-joi.svg
[npm-url]: https://www.npmjs.com/package/koa-joi
[travis-image]: https://img.shields.io/travis/pierreinglebert/koa-joi/master.svg?label=Linux%20build
[travis-url]: https://travis-ci.org/pierreinglebert/koa-joi
[coveralls-image]: https://img.shields.io/coveralls/pierreinglebert/koa-joi.svg
[coveralls-url]: https://coveralls.io/r/pierreinglebert/koa-joi?branch=master
[dep-image]: https://img.shields.io/david/pierreinglebert/koa-joi.svg
[dep-url]: https://david-dm.org/pierreinglebert/koa-joi
[devDep-image]: https://img.shields.io/david/dev/pierreinglebert/koa-joi.svg
[devDep-url]: https://david-dm.org/pierreinglebert/koa-joi#info=devDependencies
