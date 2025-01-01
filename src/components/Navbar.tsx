import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { DiCelluloid } from 'react-icons/di';
import { MdOutlineMenu } from "react-icons/md";
const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false)

  const togglemenu =()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
       <div className=' flex justify-between items-center'>
        <div className='text-xl font-medium'> Nahead</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='menuLink'><a href="#hero">Home</a></li>
            <li className='menuLink'><a href="#about">About</a></li>
            <li className='menuLink'><a href="#projects">Projects</a></li>
            <li className='menuLink'><a href="#skills">Skills</a></li>
            <li className='menuLink'><a href="#contact">Contact</a></li>
        </ul>
<div className='md:hidden' onClick={togglemenu}>
  {isMenuOpen? <AiOutlineClose size={29 }/>:        <MdOutlineMenu className='md:hidden' size={29}/>}
</div>
       </div>
       {
        isMenuOpen&&(
        <ul className="flex flex-col gap-3 mt-3 md:hidden">
             <li className='menuLink'><a href="#hero"onClick={togglemenu} >Home</a></li>
            <li className='menuLink'><a href="#about" onClick={togglemenu}>About</a></li>
            <li className='menuLink'><a href="#projects"onClick={togglemenu}>Projects</a></li>
            <li className='menuLink'><a href="#skills"onClick={togglemenu}>skills</a></li>
            <li className='menuLink'><a href="#contact"onClick={togglemenu}>contact</a></li>
        </ul>
        )
       }
    </div>
  )
}

export default Navbar
