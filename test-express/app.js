var express = require('express'),
	stylus = require('stylus'),
	nib = require('nib');
var weblog = require('./app/controllers/weblog.js');

var app = express();

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', weblog.index);
app.get('/weblog', weblog.index);
app.get('/weblog/view/:id', weblog.view);

app.listen(1337);
console.log('Application accessible at http://localhost:1337');