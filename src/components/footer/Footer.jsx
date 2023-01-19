import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Rozymacassy</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a> </li>
        <li><a href="#about">About</a> </li>
        <li><a href="#experience">Experience</a> </li>
        <li><a href="#services">Services</a> </li>
        <li><a href="#portfolio">Portfolio</a> </li>
        <li><a href="#testimonials">Testimonials</a> </li>
        <li><a href="#contact">Contact</a> </li>

      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/nwachukwu-rozimari-bb7b79236" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Rozymacassy " target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/rozymakassy" target="_blank"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy;2023 | All Rights Reserved | Design by Chinenye Rosemary
        </small>
      </div>
    </footer>
  )
}

export default Footer