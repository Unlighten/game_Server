let mongoose = require('mongoose');
//
const Schema = mongoose.Schema;

// let leaderboardSchema = mongoose.Schema({
let leaderboardSchema = new Schema({
	username: String,
	level: Number
})

module.exports = mongoose.model('Leaderboard', leaderboardSchema);