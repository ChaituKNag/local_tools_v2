module.exports = function (app) { 
  
  // Set the view engine
  app.set('view engine', 'ejs');

  // Home page
  app.get('/', function (req, res) {
    res.render('basic/home');
  })

  // Login page
  app.get('/login', function (req, res) {
    res.render('basic/login');
  })
}
