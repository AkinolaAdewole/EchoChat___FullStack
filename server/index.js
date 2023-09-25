const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config()

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const app = express();
const server = http.createServer(app);
const io = socketio(server)

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, // Enable credentials (e.g., cookies) if needed
}));

// Set up an event listener for when a client connects to the server using Socket.IO
io.on('connect', (socket) => {
    // When a client sends a 'join' message
    socket.on('join', ({ name, room }, callback) => {
      // Add the user to the specified room
      const { error, user } = addUser({ id: socket.id, name, room });
  
      // If there's an error (e.g., username already taken), notify the client via the callback
      if (error) return callback(error);
  
      // Make the user join the specified room
      socket.join(user.room);
  
      // Emit a 'message' event to welcome the current user to the room
      socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
  
      // Broadcast a 'message' event to all other users in the room to inform them of the new user
      socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
  
      // Emit a 'roomData' event to update the user list in the room for all clients
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
  
      // Call the provided callback to acknowledge the client's request
      callback();
    });
  
    // When a client sends a 'sendMessage' message
    socket.on('sendMessage', (message, callback) => {
      // Get the user associated with the current socket connection
      const user = getUser(socket.id);
  
      // Broadcast the received message to all users in the same room
      io.to(user.room).emit('message', { user: user.name, text: message });
  
      // Call the provided callback to acknowledge that the message has been processed
      callback();
    });
  
    // When a client disconnects from the server
    socket.on('disconnect', () => {
      // Remove the user from the user list
      const user = removeUser(socket.id);
  
      // If a user was found (meaning they were previously added), notify others that the user has left
      if (user) {
        io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
        
        // Update the room's user list via a 'roomData' event
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
      }
    });
  });
  

app.get("/", (req, res) => {
    res.send({ response: "Server is up and running." }).status(200);
  });

const PORT = process.env.PORT
server.listen(PORT,()=>{
    console.log(`server is connected on port ${PORT}`);
})