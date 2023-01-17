import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
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
              <small>80+ Completed projects</small>

            </article>

          <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
          
          </article>

            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>

            </article>
        </div>


            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, possimus 
              quos? Pariatur sed nobis vel laborum nulla in, molestiae possimus veniam consequatur
              nemo corrupti odio ipsam temporibus incidunt modi, qui doloribus consectetur. Reprehenderit 
              quae earum eveniet odio optio et eius debitis voluptates, nulla ex numquam, illo magni ratione 

            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>


        </div>
      </div>
    </section>
  )
}

export default About