
/**
 *  Step 1: Declare express
 */

var express = require('express');

/**
 *  Step 2: Get the app object through express()
 *
 */

app = express();

/**
 *  Step 3: Get the passport object for authentication
 */

var passport = require('passport');

/**
 *  Step 4: Do all the app common middleware in the app.config.js file
 *
 */

var configApp = require('./app/configs/app.config');
configApp(app, passport);

/**
 *  Step 5: Configure basic routes
 */

var configBasicRoutes = require('./app/configs/basic-routes.config');
configBasicRoutes(app, passport);

/**
 *  Step last: start the server
 */

app.listen(8080);