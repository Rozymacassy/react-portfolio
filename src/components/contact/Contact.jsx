import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import emailjs from 'emailjs-com'
import { useRef } from 'react';



const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fniqnhu', 'template_i2kljo9', form.current, 'f7WS7yMx2Jk8BEGly')
    e.target.reset()

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mariposamacassy@gmail.com</h5>
            <a href="mailto:mariposamacassy@gmail.com"target='_blank'>
            Send a Message
            </a>

          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Chinenye Rosemary</h5>
            <a href="https://m.me/mariposamacassy" target='_blank'>
            Send a Message
            </a>

          </article>

            <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>+2348058359775</h5>
            <a href="https://wa.me/+2348058359775" target='_blank'>
              Send a Message
            </a>

          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" placeholder='message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>


  
        </form>
      </div>
    </section>
  )
}

export default Contact