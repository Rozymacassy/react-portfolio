import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <h4>Email</h4>
            <h5>mariposamacassy@gmail.com</h5>
            <a href="mailto:mariposamacassy@gmail.com"></a>

          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact