import { useState } from 'react'

export default function Profile() {
  const [user, setUser] = useState('Daniel');
  const handleUser = () => {
    setUser(prevState => {
        return prevState === 'Daniel' ? 'Dorado' : 'Daniel';
    })
  }
  return (
    <div>
      <h1>Profile</h1>
      <p>{user}</p>
      <button onClick={handleUser}>Change user</button>
    </div>
  )
}
