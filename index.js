const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const {setCORS} = require('./middlewares/security');
const indexRoute = require('./routes/indexRoute');

// 0. Import functions from users.js
const { addUser, removeUser, getUser } = require('./controllers/usersController');

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Middleware
app.use(express.static("client/build"));
app.use(setCORS);
app.use(cors());
app.use('/', indexRoute);

// User joins the chat
io.on('connection', (socket) => {
 
  // Recieve join event we created on Chat.js
  socket.on('join', ({name, room}, callback) => {

    // 1. Add user to the users array
    const { error, user } = addUser({ id: socket.id, name, room, });

    // 2. If error, send it to front-end
    if (error) return callback(error);

    // 3. Send a message to the user
    socket.emit('message', {user: 'ChatBot', text: `${user.name}, welcome to the room ${user.room}`});

    // 4. Let people know a new user has joined the room
    socket.broadcast.to(user.room).emit('message', {user: 'ChatBot', text: `${user.name} has joined`});

    // 5. If not, allow user to the room
    socket.join(user.room)

    // 6. Call callback so it gets called everytime on front-end
    callback();
  });

  // 7. Create events for user generated messages
  socket.on('sendMessage', (message, callback) => {

    // 8. Get the user who sent that message
    const user = getUser(socket.id);
    // 9. Emit that message
    io.to(user.room).emit('message', {user: user.name, text: message});
    // 10. Call callback so we can do stuff after the msg is sent on front-end
    callback();
  })

  socket.on('disconnect', () => {
    // Final
    const user = removeUser(socket.id);
    // Let others know when someone left
    if (user) {
      io.to(user.room).emit('message', {user: 'ChatBot', text: `${user.name} has left`})
    }
  })
})


server.listen(PORT, () => console.log(`server running on ${PORT}`));