// Include the requested files
var express = require('express'),
	stylus = require('stylus'),
	weblog = require('./app/controllers/weblog'),
	users  = require('./app/controllers/user'),
	socket = require('./app/controllers/socket'),
	provider = require('./app/models/provider'),
	load = new provider.get_model();

var user = new load.model('user');
user.find_all(function(err, users){
	console.log(users);
});
// Create a new object of the Express framework
var app = express();

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

// Make use of the sylus middleware
app.use(stylus.middleware({
	src: __dirname + '/app/views',
	dest: __dirname + '/public',
	compress: true
}));

// Set the path to the public directory
app.use(express.static(__dirname + '/public'));
app.use(express.cookieDecoder());
app.use(express.session());


// Set the weblog routes
app.get('/', weblog.index);
app.get('/weblog', weblog.index);
app.get('/users/new', users.new);
app.get('/weblog/view/:id', weblog.view);



function loadUser(req, res, next) {
  if (req.session.user_id) {
    User.findById(req.session.user_id, function(user) {
      if (user) {
        req.currentUser = user;
        next();
      } else {
        res.redirect('/sessions/new');
      }
    });
  } else {
    res.redirect('/sessions/new');
  }
}

// Set the socket routes
app.get('/socket', socket.index);

// Let the app listen on 1337
app.listen(1337);
console.log('Application accessible at http://localhost:1337');