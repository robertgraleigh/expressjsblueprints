var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/user.js');
var passport = require('passport');

mongoose.connect('mongodb://localhost/', function(err) {
	if (err) throw err;
});

var app = express();

app.get('/', function(req, res, next) {
	res.send('Hello, World!');
});

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res, next) {
	res.render('index');
});

app.use(require('cookie-parser')('my secret string'));
app.use(require('express-session')({ secret: 'my other secret string'}));
app.use(require('body-parser')());
app.use(passport.initialize());
app.use(passport.session());

app.listen(3000);
console.log('Express has started on port 3000');
