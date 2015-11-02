'use strict';

module.exports = function(dirname) {

  require('dotenv').config({
    silent: true,
    path: dirname + '/.env'
  });

  return process.env;
};
