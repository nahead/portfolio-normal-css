import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'


const Hero = () => {
  return (
    <><div id='hero' className={` bg-no-repeat  
       md:bg-[url('/profile.jpg')]  md:bg-left lg:bg-[16%] bg-cover rounded-full  ` }
      style={{ backgroundSize: "35%" }}>
<Image src="/profile.jpg" alt='' height={200} width={200} className='absolute ml-24 sm:ml-[220]  mt-20 md:hidden'/>

      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className=' text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div className='mt-52 md:mt-0'>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Nahead</p>
            <p data-aos="zoom-in-up">Jokhio</p>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default Hero
