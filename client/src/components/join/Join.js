import React, { useState } from 'react'

export default function Join({setName}) {
  const [nameInput, setNameInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setName(nameInput);
    sessionStorage.setItem('name', nameInput);
  }

  return (
    <div className="Join">
      <h1>Welcome!</h1>
      <form onSubmit={handleSubmit} className="join-form">
        <label htmlFor="name">Choose your nickname:
          <input required type="text" placeholder="Name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
        </label>
        <button type="submit">Join</button>
      </form>
    </div>
  )
}
