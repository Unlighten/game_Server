//remember these variables are how we are importing the other files
var Auth = require('./controllers/auth');
var passportService = require('./services/passport');
var passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false});
var requireSignin = passport.authenticate('local', {session: false});

//this is suppose to set the route
module.exports = function(app){

	app.get('/', requireAuth, function(req, res){
		res.send('Homepage');
		//res.send({hi:'there'});
	});

	app.post('/signup', Auth.signup);
	app.post('/signin', requireSignin, Auth.signin);
}