
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');
var say = require('say');
const PORT = process.env.PORT || 8000
http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//user set up
//var numUsers = 0;
//var voices = function(){
// Princess, Vicki, Fiona, Samantha, Alice, Tessa, Monica, Moira, Diego, Daniel, Anna, Milena, Fred, Junior, Ralph, Bad News,


io.on('connection', function(socket){

  //user set up
  //var addedUser = false;
  //var socket = io('/user');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    say.speak(msg, 'Moira', 1.0)
    // say.stop();

    //To set up a custom namespace, you can call the of function on the server-side:

    // var nsp = io.of('/user');
    // nsp.on('connection', function(socket){
    //   say.speak('Greetings', user);
    // });
    // nsp.emit('hi', user);

    //client side, tell Socket.IO client to connect to that namespace:

    request.post(
      'http://localhost:3000/message',
      { json: { message: msg} },
      function (error, response, body) {
        if (error || response.statusCode !== 200) {
          console.log("Could not connect to Ubot :(")
          return
        }
        console.log(body);

        io.emit('bot message', body.content);// Step 6
        say.speak(body.content, 'Daniel', 1.0)
        console.log('message: ' + body.content);
      });
    });
  });





  // when the client emits 'new message', this listens and executes
  //   socket.broadcast.emit('new message', {
  //     username: socket.username,
  //     message: data
  //   });
  // });
  // when the client emits 'add user', this listens and executes
  // socket.on('add user', function (username) {
  //   if (addedUser) return;

  // store the username in the socket session for this client
  // socket.username = username;
  // ++numUsers;
  // addedUser = true;
  // socket.emit('login', {
  //   numUsers: numUsers
  // });
  // echo globally (all clients) that a person has connected
  //   socket.broadcast.emit('user joined', {
  //     username: socket.username,
  //     numUsers: numUsers
  //   });
  // });

  // when the client emits 'typing', we broadcast it to others
  // socket.on('typing', function () {
  //   socket.broadcast.emit('typing', {
  //     username: socket.username
  //   });
  // });

  // when the client emits 'stop typing', we broadcast it to others
  // socket.on('stop typing', function () {
  // socket.broadcast.emit('stop typing', {
  //   username: socket.username
  // });
  // });

  // when the user disconnects.. perform this
  // socket.on('disconnect', function () {
  //   if (addedUser) {
  //     --numUsers;
  //
  //     // echo globally that this client has left
  //     socket.broadcast.emit('user left', {
  //       username: socket.username,
  //       numUsers: numUsers
  //     });
  //   }
  // // });
