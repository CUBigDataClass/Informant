module.exports = function(stream, io){
  // When tweets get sent our way ...
  stream.on('data', function(data) {
          console.log('in stream handler!');
          io.emit('tweet', data);
  });
};
