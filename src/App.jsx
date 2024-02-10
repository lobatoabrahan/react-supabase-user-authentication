import React, { useState, useEffect } from 'react';
import { SignUp, Login, Homepage } from './pages';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';



const App = () => {

  const [token, setToken] = useState(false)

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }

  }, [])


  function PrivateRoute({ children, ...props }) {
    const token = sessionStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
  }
  return (
    <div>
      <Routes>
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/login'} element={<Login setToken={setToken} />} />
        <Route path={'/homepage'} element={<PrivateRoute><Homepage token={token} /></PrivateRoute>} />

      </Routes>


    </div>
  )
}

export default App