import express from 'express'
const app = express()
var http = require('http').Server(app);
import config from './config'


//must listen for connection

//must use a RESTful route for message to & from?

//0. google httparty equivilent in node
//1. Make the call to rails
//2. create event handler conditional for when rails responds

var http = require('http');

function sendPrompt(from message from client/socket, callback?) {
      //json post object
    return http.post({
        host: " ", //this is the api im trying to make calls to
        path: "/" //via the messages route
        data: "" //this is the data im sending or in this case the prompt for a response
        //when api responds the following function gets called
    }, function getResponse(response) {
      //what is node response.on?
        var body = '';
        response.on('data', function() {

        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsedResponse = JSON.parse(body);
            callback({
                response: parsed.response,
                message: message
            });
        });
    });

// }
