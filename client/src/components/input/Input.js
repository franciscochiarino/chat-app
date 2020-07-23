import React, { useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker, Emoji } from 'emoji-mart';
import TextareaAutosize from 'react-autosize-textarea';

export default function Input({ text, setText, sendMessage }) {
  const [emojiWindow, setEmojiWindow] = useState(false);

  const handleEmojiWindow = () => {
    setEmojiWindow(!emojiWindow);
  }

  return (
    <>
      { emojiWindow ? 
        <Picker className="Picker" set="apple" theme="light" style={{fontFamily: 'initial'}} onSelect={emoji => setText(text + ` ${emoji.native} `)} />
      : null }
      <div className="Input">
        <form onSubmit={sendMessage} className="chat-form">
          <button type="button" className="emoji-btn" onClick={handleEmojiWindow}><Emoji emoji={{ id: 'grinning'}} size={20} /></button>
          {/* <input type="text" placeholder="Type a message..." value={text} onChange={(e) => setText(e.target.value)} /> */}
          <TextareaAutosize className="textarea-autosize" style={{ minHeight: 20, maxHeight: 70, resize: 'none' }} placeholder="Type a message..." value={text} onChange={(e) => setText(e.target.value)} />
          <button type="submit" onClick={() => setEmojiWindow(false)}>Send</button>
        </form>
      </div>
    </>
  )
}
