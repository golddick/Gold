import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsMoonFill} from 'react-icons/bs'
import {BsSun} from 'react-icons/bs'
const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/golddick/' target="_blank"><FaLinkedin /></a>
        <a href='https://github.com/golddick/' target="_blank"><AiOutlineGithub /></a>
        <a href='#' target="_blank" > <BsMoonFill /></a> 
        <a href='#' target="_blank" > <BsSun /></a>
    </div>
  )
}

export default Headersocials