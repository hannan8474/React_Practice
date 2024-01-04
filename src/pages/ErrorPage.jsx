import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    <>
        <h3>Page Not Found</h3>
        <button onClick={() => navigate('/')}>Go Back</button>
    </>
  )
}

export default ErrorPage