import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = ({token}) => {
  let navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token, navigate])

  function handleLogout(){
    sessionStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div>
      {token && <h3>Welcome back, {token.user.user_metadata.full_name}</h3>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Homepage