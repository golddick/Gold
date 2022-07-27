import React from 'react'
import './nav.css'
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{AiOutlineBook} from 'react-icons/ai'
import{RiServiceLine} from 'react-icons/ri'
import{BiMessageRoundedDots} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#') 
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' :''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' :''}><AiOutlineUser /></a>
      <a href='#exp' onClick={() => setActiveNav('#exp')} className={activeNav === '#exp' ? 'active' :''}><AiOutlineBook /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' :''}><RiServiceLine /></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' :''}><BiMessageRoundedDots /></a>
    </nav>
  )
}

export default Nav