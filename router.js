module.exports = function(app){

	app.get('/', function(req, res, next){
		res.send("Homepage");
	});

	app.get('/leaderboard', function(req, res, next){
		res.send("Leaderboard Page");
	});

	app.get('/profiles', function(req, res, next){
		res.send("Profile Page");
	});

	app.get('/game', function(req, res, next){
		res.send("Game");
	});

	app.get('/signup', function(req, res, next){
		res.send("Signup Page");
	});
}