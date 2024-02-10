import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = ({token}) => {
  let navigate = useNavigate()

  function handleLogout(){
    sessionStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div>
      {token && <h3>Welcome back, {token.user.email}</h3>}
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => console.log(token)}>Show Token</button>
    </div>
  )
}

export default Homepage