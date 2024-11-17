import React from 'react'
import logo from '../assets/logo.png'
// import  './style.css'

const User = () => {
  return (
    <div className='User'>
      <div className='logo'>
        <img src={logo} alt="" srcset="" />
      </div>

      <div className='Profile'>
        <p>Code Note</p>
        <a href="#">Logout</a>
      </div>      
    </div>
  )
}

export default User
