import React from 'react'
import './about.css'
import ABOUT from '../../assests/about.jpeg'
import {FaAward} from 'react-icons/fa' 
import {FiUsers} from 'react-icons/fi'
import {BsFolder2} from 'react-icons/bs'

const about = () => {
  return (
    <section id='about'> 
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about_container">
      <div className='about_me'>
        <div className='about_me-image'>
          <img src={ABOUT} alt='About Image' />
        </div>
      </div>

      <div className='about_content'>
        <div className='about_cards'>
        < article className='about_card'>
          <FaAward className='about_icon' />
        <h5>Experience</h5>
        <small>3+ years working</small>
        </article>
        
        < article className='about_card'>
          <FiUsers className='about_icon' />
        <h5>Clients</h5>
        <small>3+ years working</small>
        </article>

        < article className='about_card'>
          <BsFolder2 className='about_icon' />
        <h5>Project</h5>
        <small>4+ completed</small>
        </article>
      </div>

      <p>
        
      I am a Software Engineer with proficiency in frontend web development. I have extensive knowledge of HTML, CSS, JavaScript, and React. As a software engineer, My objective as a software engineer is to aid in the implementation of creative concepts and demonstrate my commitment to developing first-rate software solutions for companies.
      </p>

      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
     </section>
  )
}

export default about