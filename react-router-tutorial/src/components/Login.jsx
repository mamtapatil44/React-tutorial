import React from 'react'
import { useNavigate } from 'react-router-dom'
import Submitbutton from './Submitbutton'

const Login = () => {
    const isLoading = true;
    const navigate = useNavigate()
    const handleLogin = ()=>{
       localStorage.setItem("token","user-autneticate")
        navigate('/dashboard')
    }
  return (
    <div>  <button className='bg-blue-700 p-2 rounded-lg curpsor cursor-pointer' onClick={handleLogin}>Login</button>
    
     <Submitbutton {... isLoading && {disabled:true}}/>
    </div>
  )
}

export default Login