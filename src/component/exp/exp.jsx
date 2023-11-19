import React from 'react'
import './exp.css'
import Js from '../../assests/javascript.png'
import Css from '../../assests/css.logo.png'
import Html from '../../assests/html-logo.png'
import Rjs from '../../assests/reactjs.png'
import {BsFillPatchCheckFill} from 'react-icons/bs'
// import required modules
import { Autoplay, Navigation, Pagination, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";


const exp = () => {
  return (
    <section id='exp'>
      <h5>Skills & Experience</h5>
      <h2>Qualification</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Tech Stack</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>HTML</h4>
              <div className='item-image'>
              <img src= {Html}  />
            </div>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>CSS</h4>
              <div className='item-image'>
              <img src= {Css}  />
            </div>
              <small className='text-light'>Intermidiate</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>Javascript</h4>
              <div className='item-image'>
              <img src= {Js} className='stackimg' />
            </div>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>Next JS</h4>
              <div className='item-image'>
              <img src='data:image/png;base64,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'  />
            </div>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>TypeScript</h4>
              <div className='item-image'>
              <img src='data:image/png;base64,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'  />
            </div>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>React JS</h4>
              <div className='item-image'>
              <img src= {Rjs}  />
            </div>
              <small className='text-light'>Experienced</small></div>
            </article>
           </div>
          </div>
         
          
           
          {/*END OF FRONTEND*/}

          <div className='experience_backend'>
          <h3>Experience </h3>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ 
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="myExpSwiper"
      >
        
          <div className='experience_content'>
          <SwiperSlide>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>Frontend Engineer  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 months </h4>
             <h4> <small className='text-light'>Freelancing </small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Built a website using React JS</i></small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Consumed API</i></small></h4>
              {/* <h4><small className='text-light'>&nbsp;*<i>Built Front-end website</i></small></h4> */}
              </div>
            </article>
            </SwiperSlide>
          <SwiperSlide>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>Frontend Engineer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021/10-2022/03</h4>
             <h4> <small className='text-light'>TruSoft Limited lagos state, Nigeria </small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Built a website that was created using HTML, JavaScript and CSS</i></small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Built a website using React JS</i></small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Consumed API</i></small></h4>
              </div>
            </article>
            </SwiperSlide>
            <SwiperSlide> 
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>Frontend Engineer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020/04-2021/01</h4>
             <h4> <small className='text-light'>Arcon capital Abuja, Nigeria </small></h4>
             <h4><small className='text-light'>&nbsp;*<i>Built website that was created using HTML, JS and CSS</i></small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Built UI screen with HTML and CSS</i></small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Consumed API</i></small></h4>
              </div>
            </article>
            </SwiperSlide>
            <SwiperSlide>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_detail-icon' />
              <div><h4>Frontend Engineer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019/03-2019/12</h4>
             <h4> <small className='text-light'>TrueBlue Energy Port Harcourt Rivers State, Nigeria </small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Designed UI/UX usign figma</i></small></h4>
              <h4><small className='text-light'>&nbsp;*<i>Translated figma design into responsive UI website </i></small></h4>
              </div>
            </article>
            </SwiperSlide>
          </div>
           </Swiper>
          </div>
        </div>
    </section>
  )
}

export default exp