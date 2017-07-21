
// const server = express()
//   .use((req, res) => res.sendFile(INDEX) )
//   .listen(PORT, () => console.log(`Listening on ${ 8000 }`));

export default {
  server: {
    host: process.env.youmachine.herokuapp.com/ || 'http://localhost:8000'
  }
}


// server.listen(process.env.PORT || 3000);
//
// let server = app.listen(process.env.PORT)
// var io = require('socket.io').listen(server)
// global.io = io
