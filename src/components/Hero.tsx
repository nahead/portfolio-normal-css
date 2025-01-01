import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import "../app/style/hero.css"

const Hero = () => {
  return (
    <div id='hero'>
      <Image src="/profile.jpg" alt='' height={200} width={200} className='hero-image' />
      <Navbar />
      <div className='hero-container'>
        <div className='hidden lg:block'></div>
        <div className='hero-text'>
          <div className='hero-text-content'>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Nahead</p>
            <p data-aos="zoom-in-up">Jokhio</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero