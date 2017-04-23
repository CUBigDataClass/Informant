var express = require('express')
var path = require('path');
import React from 'React';

var port = 3333;

var app = express();
var http = require('http');

app.use(express.static('.'));


var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

var io = require('socket.io').listen(server);
