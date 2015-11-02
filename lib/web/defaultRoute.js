'use strict';

var express = require('express');

module.exports = function() {
  var router = express.Router();

  router.get('/partials/:moduleName/:partialPath', function(req, res){
    res.render([
      'partials',
      req.params.moduleName,
      req.params.partialPath
    ].join('/'))
  });

  // install app
  router.get('/clgt-install*', function(req, res){
    res.render('install');
  });

  // admin app
  router.use('/clgt-admin*', function(req, res){
    res.render('admin');
  });

  // front app
  router.get('/*', function(req, res) {
    res.render('front');
  });


  return router;
}
