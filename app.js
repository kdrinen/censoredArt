var express = require('express')
var app = express(); //use the express js framework to serve out html files (handle the request and the response on the server)
var server = require('http').Server( app ) //start a server instance on a port
var io = require('socket.io')(server) //use socket.io for real time connections aka. wesockets

server.listen(3000, function(){ //set up a server on posrt 3000, do a callback when it started successfully
  console.log("server started on 3000");
})

app.use( express.static('public'))

var storedPositions = [];

io.on('connection', function(socket){ //if socket.io sees a new connection, do something with them...
  console.log(socket.id)//prints out the socket that connected (ie. all users + the projection)

  io.emit('storedPositionMessage', storedPositions);

  socket.on('addRectangle', function(data){//look for any messages with the 'addRectangle'
    console.log("addRectangle" + data);//log out the 'data' in this case you get true, but you could use this to get any arbitrary data you want, think position, color, etc.
    io.emit('projectionRectangle', data);// send out a message to the projection to add a rect to the screen

    storedPositions.push(data);
  })

})
