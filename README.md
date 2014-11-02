koa-joi
=======

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
