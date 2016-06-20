var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var User = require('mongoose').model('User');

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, done);
});
