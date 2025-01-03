import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { DiCelluloid } from 'react-icons/di';
import { MdOutlineMenu } from "react-icons/md";
import "../app/style/navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar-title'>Nahead</div>
        <ul className='navbar-menu'>
          <li className='menuLink'><a href="#hero">Home</a></li>
          <li className='menuLink'><a href="#about">About</a></li>
          <li className='menuLink'><a href="#projects">Projects</a></li>
          <li className='menuLink'><a href="#skills">Skills</a></li>
          <li className='menuLink'><a href="#contact">Contact</a></li>
        </ul>
        <div className='menu-icon' onClick={togglemenu}>
          {isMenuOpen ? <AiOutlineClose size={29} /> : <MdOutlineMenu size={29} />}
        </div>
      </div>
      {
        isMenuOpen && (
          <ul className="mobile-menu">
            <li className='menuLink'><a href="#hero" onClick={togglemenu}>Home</a></li>
            <li className='menuLink'><a href="#about" onClick={togglemenu}>About</a></li>
            <li className='menuLink'><a href="#projects" onClick={togglemenu}>Projects</a></li>
            <li className='menuLink'><a href="#skills" onClick={togglemenu}>Skills</a></li>
            <li className='menuLink'><a href="#contact" onClick={togglemenu}>Contact</a></li>
          </ul>
        )
      }
    </div>
  )
}

export default Navbar