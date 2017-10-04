let mongoose = require('mongoose');

let leaderboardSchema = mongoose.Schema({
	username: String,
	level: Number
})

module.exports = mongoose.model('Leaderboard', leaderboardSchema);