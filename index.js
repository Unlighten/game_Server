require('dotenv').config()
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');
var mongoose = require('mongoose');
var cors = require('cors');

//DB connection
mongoose.connect('mongodb://test:test@ds155684.mlab.com:55684/game');
// mongoose.connect('mongodb://localhost/game');

//Middleware
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
router(app);

var port = process.env.PORT || 7272;

var server = http.createServer(app);


server.listen(port);
console.log('Server listening on ' + port);