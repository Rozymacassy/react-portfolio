import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/crypto-wallet.png' 
import IMG2 from '../../assets/weatherApp.png' 
import IMG3 from '../../assets/topaz-restaurant.png' 
import IMG4 from '../../assets/crappo.png' 
import IMG5 from '../../assets/donation.png' 
import IMG6 from '../../assets/responsive-login.png' 



const data =[
{ 
   id: 1,
  image: IMG1,
  title: 'Crypto Currency Wallet that sends and recieves crypto, built with React and Ether.js',
  github: 'https://github.com/Rozymacassy/ACE-crypto-wallet',
  demo: 'https://https://ace-crypo-wallet.vercel.app/'
},

{ 
  id: 2,
 image: IMG2,
 title: 'Weather application that tells the current weather forcast of any city in real time. Built with HTML, CSS and JS',
 github: 'https://github.com/Rozymacassy/my-weather-app',
 demo: 'https://my-vanilla-weather-app.netlify.app'
},

{ 
  id: 3,
 image: IMG3,
 title: 'A single page resturant website. Built with HTML and CSS',
 github: 'https://github.com/Rozymacassy/Topaz-Restaurant',
 demo: 'https://topaz-restaurant.vercel.app/'
},

{ 
  id: 4,
 image: IMG4,
 title: 'Cloned Cryppo Website, Built with HTML, CSS and JS',
 github: 'https://github.com/Rozymacassy/WEB3LADIES---BOUNTY-PHASE-PROJECT',
 demo: 'https://web3ladies-crappo-project.netlify.app/'
},

{ 
  id: 5,
 image: IMG5,
 title: 'single page donation site that recieves donation for the less privillaged. Built with HTML, inline CSS and JS',
 github: 'hhttps://github.com/Rozymacassy/passion-project',
 demo: 'https://passion-project-eight.vercel.app/'
},

{ 
  id: 6 ,
 image: IMG6,
 title: 'Responsive Sign-up page. Built with HTML, CSS and JS',
 github: 'https://github.com/Rozymacassy/Media-Query',
 demo: 'https://responsive-sign-up-page.vercel.app/'
},

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
          {
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                 </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
      
              </article>
              )
            })
          }

      </div>
    </section>
  )
}

export default Portfolio