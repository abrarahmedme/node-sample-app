'use strict';
module.exports = function (config, e) {
  return function isBoss(req, res, next) {
    if ( ! req.headers.authorization) {
      return res.status(401).json({
        type: 'Error',
        message: 'Expected HTTP header has authorization bearer'
      });
    }
    var token = req.headers.authorization.split(' ')[1];

    if (token !== config.BOSS_TOKEN) {
      var msg = 'boss permission required to perform this action';
      return next(new e.Forbidden(msg));
    }

    next();
  }
}
