// Initialize an empty array to store user information
const users = [];

// Function to add a user to the 'users' array
const addUser = ({ id, name, room }) => {
  // Trim and convert username and room name to lowercase for consistency
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Check if a user with the same name already exists in the same room
  const existingUser = users.find((user) => user.room === room && user.name === name);

  // Validate that a username and room name are provided
  if (!name || !room) return { error: 'Username and room are required.' };
  
  // If a user with the same name exists in the room, return an error
  if (existingUser) return { error: 'Username is taken.' };

  // Create a new user object and push it to the 'users' array
  const user = { id, name, room };
  users.push(user);

  // Return the newly added user object
  return { user };
}

// Function to remove a user from the 'users' array by their ID
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  // If the user is found, remove them from the array and return the removed user
  if (index !== -1) return users.splice(index, 1)[0];
}

// Function to retrieve a user by their ID
const getUser = (id) => users.find((user) => user.id === id);

// Function to retrieve all users in a specific room
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

// Export these functions to be used in other parts of your application
module.exports = { addUser, removeUser, getUser, getUsersInRoom };
