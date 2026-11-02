// import React from 'react'
import'./login.css';



function Login() {
  return (
    <>
    <div className='login-det'>
    <div className='details'>
      <h1>Sign in</h1>
    <input type="email" placeholder='Enter your Email Id'></input> 
    <input type="password" placeholder='Password'></input>
    <button>Login</button>
    </div>
    </div>
    
    </>
  )
}

export default Login