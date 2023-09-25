import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../messages/Messages';
import InfoBar from '../infoBar/InfoBar';
import Input from '../input/Input';

import './chat.css';

// Define the endpoint for the socket.io server (replace with your actual server address)
const ENDPOINT = 'http:localhost';

let socket;

// Define the Chat component
const Chat = ({ location }) => {
  // Initialize state variables using the useState hook
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Parse the 'name' and 'room' from the URL query parameters
    const { name, room } = queryString.parse(location.search);

    // Initialize a socket.io client connection to the server
    socket = io(ENDPOINT);

    // Set the 'room' and 'name' state variables based on the parsed values
    setRoom(room);
    setName(name);

    // Emit a 'join' event to the server, providing user details and handling errors
    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error); // Display an alert if there's an error
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    // Listen for incoming 'message' events from the server and update the 'messages' state
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    });

    // Listen for 'roomData' events from the server and update the 'users' state
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  // Function to send a message to the server
  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      // Emit a 'sendMessage' event to the server with the message content
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }


  return (
    <div className="outerContainer">
      <div className="container">
        {/* InfoBar component displaying room information */}
        <InfoBar room={room} />
        {/* Messages component displaying chat messages */}
        <Messages messages={messages} name={name} />
        {/* Input component for typing and sending messages */}
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      {/* TextContainer component displaying a list of users in the chat room */}
      <TextContainer users={users} />
    </div>
  );
}

export default Chat; // Export the Chat component for use in other parts of the application
