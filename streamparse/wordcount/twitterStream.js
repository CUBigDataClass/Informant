var Twitter = require('twitter');
var Server = require('socket.io');
var server = require('http').Server();
var io = Server(4000);
io.close();
server.listen(4000); // PORT is free to use
io = Server(server);


var client = new Twitter({
  consumer_key: 'GfMtCUKhLwaz340D2OoVPKBKE',
  consumer_secret: 'zuTtVGTkzmQlYXnHa0Cn9Mg3pW4tDGh2s5cvqMVxVRFB9CArdF',
  access_token_key: '838120217368756228-gumly1EgzoYD25cwNY4Bx5lEjTA8mdJ',
  access_token_secret: 'WRF3D3QsjiOjRS1rTO8Skm2WSyusrxgZl0XEUJ4XP1edb'
});


client.stream('statuses/filter',{ track: 'united'}, function(stream){
  //streamHandler(stream,io);
  stream.on('data', function(event) {
    //console.log(event.text)
    io.emit('tweet', event.text);
  });
});
