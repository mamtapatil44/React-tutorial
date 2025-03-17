import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleLogin = ()=>{
       localStorage.setItem("token","user-autneticate")
        navigate('/dashboard')
    }
  return (
    <div>  <button className='bg-blue-700 p-2 rounded-lg curpsor cursor-pointer' onClick={handleLogin}>Login</button></div>
  )
}

export default Login