import React from 'react'
import Logo from '../assets/react.svg'

const Navbar = () => {

  return (
    <nav className="navbar bg-dark text-white">
      <h1>Project Prelim</h1>
      <div className="links">
        <a className='text-white' href="/Home">Home</a>
        <p></p>
        <a className='text-white' href="/crud">About Us</a>
      </div>
  
     </nav>
  )
}

export default Navbar