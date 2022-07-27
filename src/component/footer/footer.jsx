import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'


const footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer_logo'>GOLDDICK</a>

<ul className='permalinks'>
  <li><a href='#'>Home</a></li>
  <li><a href='about'>About</a></li>
  <li><a href='#exp'>Experience</a></li>
  <li><a href='#services'>sevices</a></li>
  <li><a href='#port'>Portfolio</a></li>
  <li><a href='#test'>Testimoinals</a></li>
  <li><a href='#contact'>Contact</a></li>
</ul>

    <div className='footer_socials'>
      <a href='https://facebook.com'><AiFillFacebook/></a>
      <a href='https://instagram.com'><AiFillInstagram/></a>
      <a href='https://twitter.com'><AiFillTwitterSquare/></a>
    </div>

      <div className='footer_copyright'>
        <small>&copy; GOLDDICK. All right reserved</small>
      </div>

    </footer>
  )
}

export default footer