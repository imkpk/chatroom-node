// const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();

const socketIo = require('socket.io');

const http = require('http');
const server = http.createServer(app);
const io = socketIo(server);
// env variables
const PORT = process.env.PORT;
const public_path = process.env.PATH;

// set static folder
app.use(express.static(public_path));
// socket io
io.on('connection', (socket) => {
  console.log('new connection');
});
// app.listen
server.listen(PORT, () => {
  console.log(`server is runnign on prot number ${PORT}`);
});
