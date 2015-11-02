'use strict';

module.exports = function(user) {
  return function isLogged(req, res, next) {

    if ( ! req.headers.authorization) {
      return res.status(401).json({
        type: 'Error',
        message: 'Expected HTTP header has authorization bearer'
      });
    }

    var token = req.headers.authorization.split(' ')[1];

    var payload = null;
    try {
      payload = user.validateToken(token);
      req.user = payload._id;
      req.email = payload.email;
      next();
    } catch(err) {
      return res.status(401).json({
        type: 'Error',
        message: err.toString()
      });
    }
  }

}
