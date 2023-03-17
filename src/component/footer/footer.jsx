import React from 'react'
import './footer.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiWhatsappFill} from 'react-icons/ri'


const footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer_logo'>GOLD DICK</a>

{/* <ul className='permalinks'>
  <li><a href='about'>About</a></li>
  <li><a href='#port'>Portfolio</a></li>
  <li><a href='#contact'>Contact</a></li>
</ul> */}

    <div className='footer_socials'>
      <a href='https://api.whatsapp.com/send?phone=+2348065591354'   target="_blank" rel="noopener noreferrer"><RiWhatsappFill/></a>
      <a href='mailto:golddick60@gmail.com' target="_blank" rel="noopener noreferrer"><HiOutlineMail/></a>
    </div>

      <div className='footer_copyright'>
        <small>&copy; GOLD DICK. All right reserved</small>
      </div>

    </footer>
  )
}

export default footer