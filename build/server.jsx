var Twitter = require('twitter');
var express = require('express')
var path = require('path');
import React from 'React';
import App from "../app/App.jsx";
var streamHandler = require('./streamHandler.js');

var port = 3333;

var app = express();
var http = require('http');


var client = new Twitter({
  consumer_key: 'GfMtCUKhLwaz340D2OoVPKBKE',
  consumer_secret: 'zuTtVGTkzmQlYXnHa0Cn9Mg3pW4tDGh2s5cvqMVxVRFB9CArdF',
  access_token_key: '838120217368756228-gumly1EgzoYD25cwNY4Bx5lEjTA8mdJ',
  access_token_secret: 'WRF3D3QsjiOjRS1rTO8Skm2WSyusrxgZl0XEUJ4XP1edb'
});


app.use(express.static('.'));


var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

var io = require('socket.io').listen(server);

client.stream('statuses/filter',{ track: 'Amazon, Apple, Facebook, Google, Lyft, Microsoft, Twitter, Uber'}, function(stream){
  stream.on('data', function(data) {
          io.emit('tweet', data.text);
  });
});
