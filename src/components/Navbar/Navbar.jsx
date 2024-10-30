import React from 'react'
import './Navbar.css'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div>
      <img src={logo} alt=''/>
</div>
<div className="ul">
    <ul className='nav-comp1'>
        <li className='nav-comp'>Home</li>
        <li className='nav-comp'>About</li>
        <li className='nav-comp'>Services</li>
        <li className='nav-comp'>Featured</li>
        <li className='nav-comp'>Gallery</li>
    </ul>
</div>

    </div>
  )
}

export default Navbar
