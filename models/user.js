var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
	username: {
		type: String,
		unique: true
	},
	password: String
	//mapCount: Integer
});


//before a user is saved run a function
userSchema.pre('save', function(next){
	//this gives us access to the user model
	var user = this;

		//bcrypt...the salt cost and a callback function
		bcrypt.genSalt(10, function(err, salt){
			if(err) {return next(err); }

			//encrypt/hash the pw with a salt and after encrypting the pw, call another callback
			bcrypt.hash(user.password, salt, null, function(err, hash){
				if (err) {return next(err); }

				//plain text pw = hashed pw
				user.password = hash;
				//once its done, save it
				next();
			})
		})
})


userSchema.methods.comparePassword = function(candidatePassword, callback){

	bcrypt.compare(candidatePassword, this.password, function(err, isMatch){

		if(err) {return callback(err);}

		callback(null, isMatch);
	});
}

//this will actually create new users and load 
//the Schema into Mongoose. 
var model = mongoose.model('user', userSchema);

module.exports = model;