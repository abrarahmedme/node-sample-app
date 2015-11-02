'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(e) {

  return function respond(res, next) {

    return function handle(err, result) {
      if (err) { return next(err); }
      if (_.isArray(result)) {
        return res.json({
          status: 'success',
          total: result.length,
          data: result
        });
      }
      if (result === null) {
        return next( new e.NotFound());
      }

      res.json({
        status: 'success',
        data: result
      });
    }

  }

}
