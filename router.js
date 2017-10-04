//remember these variables are how we are importing the other files
var Auth = require('./controllers/auth');
let Leaderboard = require('./controllers/leaderboard')
var passportService = require('./services/passport');
var passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false});
var requireSignin = passport.authenticate('local', {session: false});

//this is suppose to set the route
module.exports = function(app){


		//server
	// app.get('/api/', requireAuth, function(req, res){
	// 	res.send('Homepage');
	// });

	// app.get('/api/leaderboard', Leaderboard.getBoard);
	// app.post('/api/leaderboard', Leaderboard.addLeader);

	// app.post('/api/signup', Auth.signup);
	// app.post('/api/signin', requireSignin, Auth.signin);

	app.get('/', requireAuth, function(req, res){
		res.send('Homepage');
	});

	app.get('/leaderboard', Leaderboard.getBoard);
	app.post('/leaderboard', Leaderboard.addLeader);

	app.post('/signup', Auth.signup);
	app.post('/signin', requireSignin, Auth.signin);
}