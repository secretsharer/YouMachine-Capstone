
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);

    request.post(
      'http://localhost:3000/message',
      { json: { message: msg} },
      function (error, response, body) {
        if (error || response.statusCode !== 200) {
          console.log("oopsies")
          return
        }
        console.log(body);

        io.emit('bot message', body.content); // Step 6
        console.log('message: ' + body.content);
      });
  });
});

const PORT = process.env.PORT || 8000
http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});
