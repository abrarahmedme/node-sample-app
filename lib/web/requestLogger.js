'use strict';

var _ = require('lodash');

module.exports = function main(logger) {
  return function(req, res, next) {
    var start = Date.now();
    var end = res.end;

    res.end = function(chuck, encoding) {
      var responseTime = Date.now() - start;

      end.call(res, chuck, encoding);
       var data = {
        responseTime: responseTime,
      };
      data = _.extend(data, req.query, req.body);

      data = _.omit(data, ['password', 'file']);

      logger.debug(data, [
        req.method,
        res.statusCode,
        req.url,
      ].join(' '));
    };

    next();
  }

}
