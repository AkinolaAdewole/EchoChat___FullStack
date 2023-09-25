const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv').config()

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.get('/',(req,res)=>{
  console.log("server is Okay");
  res.send(Okay)
})

app.get('/chat',(req,res)=>{
  console.log("server is Okay");
})

app.get('/',addUser);
app.post('/',addUser);
app.get('/chat',getUser);
app.post('/',getUser);
app.get('/chat',getUsersInRoom);
app.post('/',getUsersInRoom);


// io.on('connect', (socket) => {
//   socket.on('join', ({ name, room }, callback) => {
//     const { error, user } = addUser({ id: socket.id, name, room });

//     if(error) return callback(error);

//     socket.join(user.room);

//     socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
//     socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

//     io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

//     callback();
//   });

//   socket.on('sendMessage', (message, callback) => {
//     const user = getUser(socket.id);

//     io.to(user.room).emit('message', { user: user.name, text: message });

//     callback();
//   });

//   socket.on('disconnect', () => {
//     const user = removeUser(socket.id);

//     if(user) {
//       io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
//       io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
//     }
//   })
// });


const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server has started at port ${PORT}`));