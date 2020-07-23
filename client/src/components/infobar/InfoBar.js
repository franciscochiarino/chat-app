import React from 'react';
import closeBtn from '../../icons/close.png'

export default function InfoBar({ room }) {

  const handleCloseBtn = () => {
    sessionStorage.removeItem('name');
    window.location = '/';
  }

  return (
    <div className="InfoBar">
      <h1>{room}</h1>
      <img onClick={handleCloseBtn} src={closeBtn} className="close-chat-btn" alt="close" />
    </div>
  )
}
