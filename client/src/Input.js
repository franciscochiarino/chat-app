import React from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker, getEmojiDataFromNative } from 'emoji-mart';

export default function Input({ text, setText, sendMessage }) {
  return (
    <>
    <Picker set="apple" theme="light" style={{fontFamily: 'initial'}} onSelect={emoji => setText(text + emoji.native)} />
    <div className="Input">
      <form onSubmit={sendMessage} className="chat-form">
        <input type="text" placeholder="Type a message..." value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
    </>
  )
}
