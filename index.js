
var app = require('express')();
var http = require('http').Server(app);
// initialzing a new instance of socket and pass it the http server object
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    // Step 2 goes here
    io.emit('bot message', msg); // Step 6
    console.log('message: ' + msg);
  });
});

http.listen(8000, function(){
  console.log('listening on *:8000');
});
