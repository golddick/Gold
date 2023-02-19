import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/golddick/' target="_blank"><FaLinkedin /></a>
        <a href='https://github.com/golddick/' target="_blank"><AiOutlineGithub /></a>
        <a href='#' target="_blank"> <AiFillInstagram /></a> 
        <a href='#' target="_blank"> <AiFillFacebook /></a>
    </div>
  )
}

export default Headersocials