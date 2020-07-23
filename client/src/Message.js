import React, { useState } from 'react'

export default function Message({ message: { user, text }, name }) {
  // const [isSentByUser, setIsSentByUser] = useState(false);
  const trimmedUser = user.trim();
  const sanitizedUser = trimmedUser[0].toLocaleUpperCase() + user.substring(1).toLocaleLowerCase();
  const trimmedName = name.trim();
  const sanitizedName = trimmedName[0].toLocaleUpperCase() + name.substring(1).toLocaleLowerCase();

  let isSentByUser = false;
  console.log('name: ', name)
  console.log('user: ', user)

  if (sanitizedUser === sanitizedName) {
     isSentByUser = true;
  }

  return (
    isSentByUser
    ? (
      <div className="message-container justify-right">
        <div className="message-box bg-dark">
          <p className="message-text color-white">{text}</p>
        </div>
      </div>
    )
    : (
      <div className="message-container justify-left">
        <p className="sent-text">{user}</p>
        <div className="message-box bg-light">
          <p className="message-text color-black">{text}</p>
        </div>
      </div>
    )
  )
}
