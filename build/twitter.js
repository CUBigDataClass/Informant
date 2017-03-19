var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'GfMtCUKhLwaz340D2OoVPKBKE',
  consumer_secret: 'zuTtVGTkzmQlYXnHa0Cn9Mg3pW4tDGh2s5cvqMVxVRFB9CArdF',
  access_token_key: '838120217368756228-gumly1EgzoYD25cwNY4Bx5lEjTA8mdJ',
  access_token_secret: 'WRF3D3QsjiOjRS1rTO8Skm2WSyusrxgZl0XEUJ4XP1edb'
});

var stream = client.stream('statuses/filter', {track: 'Google'});
stream.on('data', function(event) {
  console.log(event.text);
});

stream.on('error', function(error) {
  throw error;
});
