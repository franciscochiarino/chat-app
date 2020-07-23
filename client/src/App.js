
import React, { useEffect, useState } from 'react';
import './App.scss';
import Join from './Join';
import Chat from './Chat';

export default function App({ setChatState, location }) {
  const [name, setName] = useState('');
  const [chatWindow, setChatWindow] = useState('chat-app-chat')
  const [enableChat, setEnableChat] = useState(true);
  const room = 'Chat App';

  useEffect(() => {
    const name = sessionStorage.getItem('name');
    if (name) {
      setName(name);
    }
  }, [name])

  return (
    enableChat
      ? (
        name
          ? (
            <div className={`App ${chatWindow}`}>
              <Chat name={name} setName={setName} room={room} chatWindow={chatWindow} setChatWindow={setChatWindow} />
            </div>
          )
          : (
            <div className="App chat-app-join">
              <Join setName={setName} />
            </div>
          )
      )
      : (
        null
      )
    
  );
}
