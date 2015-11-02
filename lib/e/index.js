var util = require('util');


function NotFound(message, data) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.code = 404;
  this.data = data;
  this.message = message;
}
function BadRequest(message, data) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.code = 400;
  this.data = data;
  this.message = message;
}
function Unauthorized(message, data) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.code = 401;
  this.data = data;
  this.message = message;
}

function PaymentRequired(message, data) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.code = 402;
  this.data = data;
  this.message = message;
}

function Forbidden(message) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.code = 403;
  this.message = message;
}

util.inherits(NotFound, Error);

module.exports = function() {
  return {
    NotFound: NotFound,
    BadRequest: BadRequest,
    Unauthorized: Unauthorized,
    PaymentRequired: PaymentRequired,
    Forbidden: Forbidden

  }
}
