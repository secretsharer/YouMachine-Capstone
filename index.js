
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');
var say = require('say');
const PORT = process.env.PORT || 80

http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

  socket.on('chat message', function(msg){
    io.emit('chat message', msg.message);


//Adding UMachine Flask API Call
    // var endpoint = 'http://example-env.xtvsb9kpah.us-west-2.elasticbeanstalk.com/message';
    // if(Math.random() >= 0.5) {
    //   endpoint = 'https://youmachine-174420.appspot.com/message';
    // }
    // console.log("Sending message to bot at endpoint: " + endpoint);
    // request.post(endpoint,
    //   { json: { message: msg.message} },
    //   function (error, response, body) {

    // request.post(
    //     'http://localhost:3000/message',
    //     // 'http://example-env.xtvsb9kpah.us-west-2.elasticbeanstalk.com/message',
    // { json: { message: msg.message} },
    // function (error, response, body) {
    //
    // console.log('before');

    request.post(
      'http://example-env.xtvsb9kpah.us-west-2.elasticbeanstalk.com/message',
      { json: { message: msg.message} },
      function (error, response, body) {
        if (error || response.statusCode !== 200) {
          console.log("Could not connect to Ubot :(")
          return
        }

        io.emit('bot message', body.content);

        console.log('message: ' + body.content);
      });
    });
  });


  //////////////////////////////////////////////////////////////////////////////

  //user set up
  //var numUsers = 0;

  //custom namespace, call the of function on the server-side:

  //user set up
  //var addedUser = false;
  //var socket = io('/user');

  // var nsp = io.of('/user');
  // nsp.on('connection', function(socket){
  //   say.speak('Greetings', user);
  // });
  // nsp.emit('hi', user);

  //client side, tell Socket.IO client to connect to that namespace:


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
