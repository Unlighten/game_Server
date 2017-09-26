var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');
var mongoose = require('mongoose');

//DB connection
mongoose.connect('mongodb://localhost:game/game');

//Middleware
app.use(bodyParser.json({type: '*/*'}));
router(app);

var port = process.env.PORT || 7272;

var server = http.createServer(app);

server.listen(port);
console.log('Server listening on ' + port);