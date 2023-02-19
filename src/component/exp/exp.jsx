import React from 'react'
import './exp.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const exp = () => {
  return (
    <section id='exp'>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Tech Stack</h3>
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
           </div> 
          </div>
           
          {/*END OF FRONTEND*/}

          <div className='experience_backend'>
          <h3>Experience </h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>Frontend Engineer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021/10-2022/03</h4>
             <h4> <small className='text-light'>TruSoft Limited lagos state, Nigeria </small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Built a website that was created using HTML, JavaScript and CSS</i></small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Built a website using React JS</i></small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Consumed API</i></small></h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>Frontend Engineer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020/4-2021/01</h4>
             <h4> <small className='text-light'>Arcon capital Abuja, Nigeria </small></h4>
             <h4><small className='text-light'>&nbsp;*<i>Built website that was created using HTML, JS and CSS</i></small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Built UI screen with HTML and CSS</i></small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Consumed API</i></small></h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>Frontend Engineer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019/03-2019/12</h4>
             <h4> <small className='text-light'>TrueBlue Energy Port Harcourt Rivers State, Nigeria </small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Designed UI/UX usign figma</i></small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Translated figma design into responsive UI website </i></small></h4>
              </div>
            </article>
            
          </div>
          </div>
        </div>
      
    </section>
  )
}

export default exp