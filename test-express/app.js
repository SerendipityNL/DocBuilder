var express = require('express');
var stylus = require('stylus');
var weblog = require('./app/controllers/weblog.js');

var app = express();

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

app.use(stylus.middleware({
	src: __dirname + '/public',
	compress: true
}))

app.use(express.static(__dirname + '/public'));

app.get('/', weblog.index);
app.get('/weblog', weblog.index);
app.get('/weblog/view/:id', weblog.view);

app.listen(3000);
console.log('Listening on port 3000');