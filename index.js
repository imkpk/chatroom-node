const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const socketio = require('socket.io');
require('dotenv').config();

const server = http.createServer(app);
const io = socketio(server);
// env variables
const PORT = process.env.PORT;
const public_path = process.env.PATH;

// app.listen
server.listen(PORT, () => {
  console.log(`server is runnign on prot number ${PORT}`);
});

// set static folder path
app.use(express.static(public_path));
// socket io
io.on('connection', (socket) => {
  console.log('new ws connection');
  socket.emmit('message', 'welcome chat course');

  // broadcast when user connecgs
  socket.broadcast.emit();
});
