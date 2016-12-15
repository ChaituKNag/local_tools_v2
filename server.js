
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
 *  Step 3: Do all the app common middleware in the app.config.js file
 *
 */

var configApp = require('./app/configs/app.config');
configApp(app);

/**
 *  Step 4: Configure basic routes
 */

var configBasicRoutes = require('./app/configs/basic-routes.config');
configBasicRoutes(app);

/**
 *  Step last: start the server
 */

app.listen(8080);