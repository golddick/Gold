import React from 'react'
import './about.css'
import BENZ from '../../assests/007.jpg'
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
          <img src={BENZ} alt='About Image' />
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
        <small>80+ completed</small>
        </article>
      </div>

      <p>
        
        It’s the ultimate sports car experience. Completely driver-centric and performance oriented, 
        the 570S Coupé is equally at home on the track as it is on the open road. With the lightest
         weight in its class and the highest power to weight ratio, it delivers super car punch and thrills that would 
        shame many more expensive rivals.

      </p>

      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
     </section>
  )
}

export default about