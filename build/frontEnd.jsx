var express = require('express')
var path = require('path');
import React from 'React';
import App from "../app/App.jsx";
var net = require('net');

var port = 3333;

var app = express();
var http = require('http');

app.use(express.static('.'));


var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});


var amazonClient = net.createConnection(6000);

amazonClient.on('data', function(data) {
  console.log('Amazon:', data)
});

var appleClient = net.createConnection(6050);

appleClient.on('data', function(data) {
  console.log('Apple:', data)
});

var facebookClient = net.createConnection(6100);

facebookClient.on('data', function(data) {
  console.log('Facebook:', data)
});

var googleClient = net.createConnection(6150);

googleClient.on('data', function(data) {
  console.log('Google:', data)
});

var lyftClient = net.createConnection(6200);

lyftClient.on('data', function(data) {
  console.log('Lyft:', data)
});

var microsoftClient = net.createConnection(6250);

microsoftClient.on('data', function(data) {
  console.log('Microsoft:', data)
});

var twitterClient = net.createConnection(6300);

twitterClient.on('data', function(data) {
  console.log('Twitter:', data)
});

var uberClient = net.createConnection(6350);

uberClient.on('data', function(data) {
  console.log('Uber:', data)
});

var io = require('socket.io').listen(server);
