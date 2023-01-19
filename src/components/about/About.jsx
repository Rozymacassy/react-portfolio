import React from 'react'
import './about.css'
import ME from '../../assets/macassy-abt.png'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'




const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projets</h5>
              <small>20+ Completed projects</small>

            </article>

          <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Happy Clients</small>
          
          </article>

            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>

            </article>
        </div>

            <p>
            I am a creative and motivated Web Developer with experience 
            in creating Interactive Web Applications with
             a Strong Collaboration Skill and Proven history of Application Development.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>


        </div>
      </div>
    </section>
  )
}

export default About