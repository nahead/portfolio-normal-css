import React from 'react'
import { CiMail } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import "../app/style/contact.css"

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className="contact-grid">
        <div className="space-y-8">
            <h2 className='contact-heading' data-aos="zoom-in-up">
                Get in touch
            </h2>
            <p className='contact-description' data-aos="zoom-in-up">
                Drop me a line, give me call, or send me a message by submitting the form
            </p>
            <div className='contact-info' data-aos="zoom-in-up">
              <CiMail size={29}/>naheadj@gmail.com
            </div>
            <div className='contact-info' data-aos="zoom-in-up">
              <BsFillTelephoneFill size={29}/>03122955972
            </div>
        </div>
        <div className="contact-form">
          <div className="contact-form-group" data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" className='contact-input' id='name' />
          </div>
          <div className="contact-form-group" data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="email" className='contact-input' id='email' />
          </div>
          <div className="contact-form-group" data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea className='contact-textarea' id='msg' rows={8}></textarea>
          </div>
          <button className='contact-button' data-aos="zoom-in-up">Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Contact