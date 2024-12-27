import React from 'react'

import { CiMail } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
            <h2 className=' text-5xl' data-aos="zoom-in-up">
                Get in touch
            </h2>
            <p className=' text-gray-600 pt-2 text[18px]' data-aos="zoom-in-up">
                Drop me a line, give me call, or send me a message by submitting the form
            </p>
            <div className='flex gap-3 items-center'data-aos="zoom-in-up">
            <CiMail size={29}/>naheadj@gmail.com
            </div>
            <div className='flex gap-3 items-center'data-aos="zoom-in-up">
      <BsFillTelephoneFill size={29}/>03122955972
            </div>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" className='h-[41px] bg-transparent border border-accent'
            id='name' />
          </div>
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="email" className='h-[41px] bg-transparent border border-accent'
            id='email' />
          </div>
          <div className="flex flex-col gap-1 " data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea className='bg-transparent border border-accent'
            id='msg' rows={8}></textarea>
           
          </div>
          <button className='bg-accent p-2 px-6 'data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
