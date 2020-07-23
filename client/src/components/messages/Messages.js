import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../message/Message';

export default function Messages({ messages, name }) {
  const renderMessages = messages.map((message, i) => {
    return(
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    )
  })
  return (
    // <div >
      <ScrollToBottom className="Messages" >
        {renderMessages}
      </ScrollToBottom>
    // </div>
    
  )
}
