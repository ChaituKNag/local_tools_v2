module.exports = function (app) {
  var express = require('express');
  var morgan = require('morgan');
  var bodyParser = require('body-parser');
  var session = require('express-session');
  
  // since public is where all the front end lies.

  app.use(express.static('./public'));

  // since we use bower for our front-end dependencies like angularjs, lodash etc.

  app.use('/lib', express.static('./bower_components'));

  // since we would like to log all the requests to the console

  app.use(morgan('dev'));

  // since we want to parse the incoming request bodies

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // since we would like to use sessions
  
  app.use(session({
    secret: process.env.SESSION_SECRET || 'chaitu secret',
    resave: false,
    saveUninitialized: false
  }));

}