import React from 'react'
import './header.css'
import CTA from './CTA'
import CAR from '../../assests/004.jpg'
import Headersocials from './Headersocials'
const header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Gold Dick</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <Headersocials />
        <div className='car'>
          <img src={CAR} alt="car"/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header