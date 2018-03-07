module.exports = function (app, passport) { 
  
  var hbs = require('express-handlebars');
  var path = require('path'); // so we can join relative paths properly to get absolute path

  app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: path.join(__dirname, '../views/layouts/')
  }));

  // Set the view engine
  app.set('view engine', 'hbs');

  // because the hbs view engine by default looks in the /views folder for the layout files
  // hacking the views path
  app.set('views', path.join(__dirname, '../views/layouts'));

  // Home page
  app.get('/', function (req, res) {
    res.render('basic/home');
  });

  // Login page
  app.get('/login', function (req, res) {
    res.render('basic/login');
  });

  // When user submits login request in /login page
  app.post('/login', passport.authenticate('local-login', {
      successRedirect : '/', // redirect to the secure profile section
      failureRedirect : '/login', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

  // A catch all route
  app.use('*', function (req, res, next) {
    if (req.isAuthenticated()) {
      console.log(req.user);
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
    //next();
  });
}
