//this controller handles the authentication 
//when a user is signing up or signing out

var User = require('../models/user');


exports.signup = function(req, res, next){

	//this should grab an incoming request
	var username = req.body.username;
	var password = req.body.password;

	User.findOne({username: username}, function(err, existingUser){
		//this if statement gives us an error if there was a problem with the search
		if(err) {
			return next(err);
		}

		//this if statement gives us an error if there is an existing user
		if(existingUser){
			return res.status(418).send(err);
		}

		//in the notes it says this saves the user if they don't exist... which doesn't make sense
		var user = new User({
			username: username,
			password: password
		});

		//this saves the record in the DB and gives us an error if there was an issue
		user.save(function(err){
			if(err) {return next(err); }

			//this shows us that the user was created
			res.json({success:true});
		});
	});
}