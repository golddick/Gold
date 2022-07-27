import React from 'react'
import './exp.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const exp = () => {
  return (
    <section id='exp'>
      <h5> What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>HTML</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>CSS</h4>
              <small className='text-light'>Intermidiate</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>Javascript</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>React JS</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>Angular</h4>
              <small className='text-light'>Intermidiate</small></div>
            </article>
           </div> 
          </div>
           
          {/*END OF FRONTEND*/}

          <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>php</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon'/>
              <div><h4>Java</h4>
              <small className='text-light'>Intermidiate</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>Javascript</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon'/>
              <div><h4>Ruby</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>Node JS</h4>
              <small className='text-light'>Intermidiate</small></div>
            </article>
            
          </div>
          </div>
        </div>
      
    </section>
  )
}

export default exp