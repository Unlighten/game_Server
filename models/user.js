var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {
		type: String,
		unique: true
		// lowercase: true
	},
	password: String
});

//this will actually create new users and load 
//the Schema into Mongoose. 
var model = mongoose.model('user', userSchema);

module.exports = model;