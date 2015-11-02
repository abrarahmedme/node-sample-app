'use strict';
var debug = require('debug')('api:error');

module.exports = function(e) {
  return function(err, req, res, next){
    if (err instanceof e.NotFound) {
      return res.status(404).send();
    }

    debug('%s', err.message);

    if (err.name === 'ValidationError') {
      return res.status(400).json({
        status: 'error',
        type: 'BadRequest',
        code: 400,
        message: err.toString()
      }).send();
    }
    return res.status(err.code || 500).json({
      status: 'error',
      type: err.name || 'Unknown Error',
      code: err.code || 500,
      message: err.message,
    }).send();

  }
}
