let Leaderboard = require('../models/maplog');


exports.addLeader = function(req, res, next) {
    let username = req.body.username;
    let level = req.body.level;

    let newLeaderboard = new Leaderboard({
        username: username,
        level: level
    })

    newLeaderboard.save((err) => {
        if(err) {
            res.json({info: 'error posting to leaderboard', error: err})
        } else {
            res.json({info: 'sucessfully pasted to leaderboard', data: newLeaderboard})
        }
    })
}

exports.getBoard = function(req, res, next) {
    Leaderboard.find((err, board) => {
        if (err){
            res.json({info: 'error getting leaderboard', error: err})
        } else {
            res.json({info: 'successfully got leaderboard', data: board})
        }
    })
}