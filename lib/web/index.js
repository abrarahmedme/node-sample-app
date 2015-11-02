var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var compression = require('compression');
var expressValidator = require('express-validator')
var web = express();

module.exports = function(dirname, e, config){

  web.use(bodyParser.urlencoded({extended: false}));
  web.use(bodyParser.json({
    limit: config.REQUEST_BODY_SIZE || '20mb'
  }));

  web.use(expressValidator({
    errorFormatter: function (param, msg, value) {
      return msg;
    }
  }));

  web.enable('trust proxy');
  web.set('views', dirname + '/views');
  web.set('view engine', 'jade');

  web.use(favicon(dirname + '/public/favicon.ico'));
  web.use(express.static(dirname + '/public'));
  web.use(compression());

  return web;

};
