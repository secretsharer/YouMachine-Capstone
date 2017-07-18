var app = require('express')();
var http = require('http').Server(app);
// initialzing a new instance of socket and pass it the http server object
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var emulator = function(msg) {
  return msg.split('').reverse().join('');
};

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    io.emit('bot message', emulator(msg));
    console.log('message: ' + msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
