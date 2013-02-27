var express = require('express'),
	stylus = require('stylus'),
	nib = require('nib');
var weblog = require('./app/controllers/weblog.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blocknodes');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log('connection to the database has been made');
});

var app = express();

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', weblog.index);
app.get('/weblog', weblog.index);
app.get('/weblog/view/:id', weblog.view);

app.listen(1337);
console.log('Application accessible at http://localhost:1337');