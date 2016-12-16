module.exports = function (app) { 
  
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
  })

  // Login page
  app.get('/login', function (req, res) {
    res.render('basic/login');
  })
}
