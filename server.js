var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
	res.send('Hello, World!');
});

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res, next) {
	res.render('index');
});

app.listen(3000);
console.log('Express has started on port 3000');
