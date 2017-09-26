var passport = require('passport');
var User = require('../models/user');
var config = require('../config');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};


//create jwt strategy
var jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
	//On payload we have sub property. Use the user model, look through all users and find user with id
	User.findById(payload.sub, function(err, user){
		//In the findById callback, we will get two arguments err and user
		//Err is going to be populated only if search fails
		if(err) {return done(err, false); }
		//If we can find the user, pass it to done callback. They are authenticated
		if(user) {
			done(null, user);
		} else {
			//Uf we cannot find user with id, we are going to call done func without user object
			done(null, false);
		}
	});
});

//This tells passport ot use the function
passport.use(jwtLogin);

//Auth_request>Passport>Router>Controller>Response