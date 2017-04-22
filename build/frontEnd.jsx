var express = require('express')
var path = require('path');
import React from 'React';
import App from "../app/App.jsx";
var dgram = require('dgram')

var port = 3333;

var app = express();
var http = require('http');

app.use(express.static('.'));


var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});


const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

var amazonSocket = dgram.createSocket('udp4')
amazonSocket.bind(6000)
amazonSocket.on('message', function(msg, rinfo) {
  console.log('Amazon: ', decoder.write(msg))
})

var appleSocket = dgram.createSocket('udp4')
appleSocket.bind(6050)
appleSocket.on('message', function(msg, rinfo) {
  console.log('Apple: ', decoder.write(msg))
})

var facebookSocket = dgram.createSocket('udp4')
facebookSocket.bind(6100)
facebookSocket.on('message', function(msg, rinfo) {
  console.log('Facebook: ', decoder.write(msg))
})

var googleSocket = dgram.createSocket('udp4')
googleSocket.bind(6150)
googleSocket.on('message', function(msg, rinfo) {
  console.log('Google: ', decoder.write(msg))
})

var lyftSocket = dgram.createSocket('udp4')
lyftSocket.bind(6200)
lyftSocket.on('message', function(msg, rinfo) {
  console.log('Lyft: ', decoder.write(msg))
})

var microsoftSocket = dgram.createSocket('udp4')
microsoftSocket.bind(6250)
microsoftSocket.on('message', function(msg, rinfo) {
  console.log('Microsoft: ', decoder.write(msg))
})

var twitterSocket = dgram.createSocket('udp4')
twitterSocket.bind(6300)
twitterSocket.on('message', function(msg, rinfo) {
  console.log('Twitter: ', decoder.write(msg))
})

var uberSocket = dgram.createSocket('udp4')
uberSocket.bind(6350)
uberSocket.on('message', function(msg, rinfo) {
  console.log('Uber: ', decoder.write(msg))
})

var io = require('socket.io').listen(server);
