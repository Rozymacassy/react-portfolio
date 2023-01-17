import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/nwachukwu-rozimari-bb7b79236" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Rozymacassy " target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/rozymakassy" target="_blank"><AiFillTwitterCircle/></a>
        <a href="https://www.facebook.com/mariposamacassy" target="_blank"><BsFacebook/></a>
        
    </div>
  )
}

export default HeaderSocials