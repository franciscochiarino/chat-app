import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import InfoBar from '../infobar/InfoBar';
import Input from '../input/Input';
import Messages from '../messages/Messages';

const socket = io();

export default function Chat({ name, room, chatWindow, setChatWindow }) {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    // Emit JOIN
    socket.emit('join', {name, room}, (error) => {
      if (error) {
        sessionStorage.removeItem('name');
        alert(error);
        window.location.reload()
      }
    });

    return () => {
      // Emit DISCONNECT
      socket.emit('disconnect');
      // Turn off this socket
      socket.off();
    }
  }, [name, room])

  useEffect(() => {
    // Recieve MESSAGE
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    })
  }, []);

  const sendMessage = e => {
    e.preventDefault();
    if (text) {
      // Emit SENDMESSAGE
      socket.emit('sendMessage', text, () => {
        setText('');
      })
    }
    if (messages.length >= 50) {
      removeFirst();
    } 
  };

  const removeFirst = () => {
    const [first, ...rest] = messages;
    return setMessages(rest);
  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        <InfoBar room={room} chatWindow={chatWindow} setChatWindow={setChatWindow} />
        <Messages messages={messages} name={name} />
        <Input text={text} setText={setText} sendMessage={sendMessage} />
      </div>
    </div>
  )
}
