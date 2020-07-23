// 1. Set up an array of users
const users = [];

// 2. Add user to users array
const addUser = ({ id, name, room }) => {
  // Sanitaze strings
  name = name.trim();
  name = name[0].toLocaleUpperCase() + name.substring(1).toLocaleLowerCase();
  room = room.trim();

  // Check if a user is trying to signup using the same username in the same room
  const existingUser = users.find((user) => user.room === room && user.name === name);
  if (existingUser) {
    return { error: 'Username is taken' }
  }

  // Otherwise, we can create a user
  const user = { id, name, room };
  users.push(user);
  return { user }
}

// 3. Remove a user
const removeUser = (id) => {

  // Check if there is a user with that id
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    // Remove user from users array
    return users.splice(index, 1)[0];
  }
}

// 4. Find a user
const getUser = (id) => users.find((user) => user.id === id);

// 5. Get users in a room
const getUsersInRoom = (room) => users.filter((user) => users.room === room);

// 6. Export functions
module.exports = { addUser, removeUser, getUser, getUsersInRoom };