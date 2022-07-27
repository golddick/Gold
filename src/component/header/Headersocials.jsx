import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target="_blank"><FaLinkedin /></a>
        <a href='https://github.com' target="_blank"><AiOutlineGithub /></a>
        <a href='https://instagram.com' target="_blank"> <AiFillInstagram /></a>
        <a href='https://facebook.com' target="_blank"> <AiFillFacebook /></a>
    </div>
  )
}

export default Headersocials