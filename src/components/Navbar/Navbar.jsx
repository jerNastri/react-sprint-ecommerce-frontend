import React, { useState } from 'react'
import './Navbar.css'
import {IoIosArrowDown} from 'react-icons/io'
import {IoIosArrowUp} from 'react-icons/io'

const Navbar = () => {

  const [showDropdown, setShowDropdown] = useState(false)
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='navbar'>
      <div className="navbar__wrapper">
        <h1>KOPPEE</h1>
        <div className={isActive ? "navbar__links show" : "navbar__links"}>
          <a href="/" className='currentPage'>Home</a>
          <a href="/about">About</a>
          <a href="/service">Service</a>
          <div className="navbar__dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            <span>Pages <IoIosArrowDown /></span>
            <div className={showDropdown ? "navbar__dropdown-list show"  : "navbar__dropdown-list"}>
              <a href="/">Reservation</a>
              <a href="/">Testimonial</a>
            </div>
          </div>
          <a href="/menu">Menu</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="navbar__hamburger">
        <div className="navbar__hamburger-content" onClick={() => setIsActive(prev => !prev)}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar