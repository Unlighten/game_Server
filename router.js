//remember these variables are how we are importing the other files
var Auth = require('./controllers/auth');
var User = require('./models/user');

//this is suppose to set the route
module.exports = function(app){
	app.post('/signup', Auth.signup);
}