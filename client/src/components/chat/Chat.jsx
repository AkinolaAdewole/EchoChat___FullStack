import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../messages/Messages';
import InfoBar from '../infoBar/InfoBar';
import Input from '../input/Input';
import { useLocation } from 'react-router-dom';

import './chat.css';

const ENDPOINT = 'http://localhost:3200';

let socket;

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const location = useLocation();

    // Access the query string part of the URL.
    const search = location.search;


  useEffect(() => {
    const { name, room } = queryString.parse(search);
  
    if (name && room) {
      socket = io(ENDPOINT);
      setRoom(room);
      setName(name);
  
      socket.emit('join', { name, room }, (error) => {
        if (error) {
          alert(error);
        }
      });
    }
  }, [ENDPOINT, location.search]);
  
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;
