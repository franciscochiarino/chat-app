
import React, { useEffect, useState } from 'react';
import '../../main.scss';
import Join from '../join/Join';
import Chat from '../chat/Chat';

export default function App({ setChatState, location }) {
  const [name, setName] = useState('');
  const [chatWindow, setChatWindow] = useState('chat-app-chat')
  const room = 'Chat App';

  useEffect(() => {
    const name = sessionStorage.getItem('name');
    if (name) {
      setName(name);
    }
  }, [name])

  return (
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
  );
}
