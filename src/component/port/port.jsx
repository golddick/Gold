import React from 'react'
import './port.css'
import Gchat from  '../../assests/gchat.png'
import Chatgpt from  '../../assests/gchatgpt.png'
import Ecomm from  '../../assests/ecomm.png'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: Ecomm,
    title: 'Sellz',
    desc: 'Sellz is a business application for a website that deals with the sale of clothing ',
    stack:'HTML, CSS, JavaScript',
    github: 'https://github.com/golddick/sellz-ecomm',
    demo: 'https://sellz-ecomm.vercel.app/'
  },
  {
    id: 2,
    image: Gchat,
    title: 'G-Chat',
    desc: 'G-chat is a social media platform and is able to route through pages',
    stack:'React JS, CSS',
    github: 'https://github.com/golddick/g-chat',
    demo: 'https://g-chat-nine.vercel.app/'
  },
  {
    id: 3,
    image: Chatgpt,
    title: 'G-Chatgpt',
    desc: 'G-chatgpt is a chat bot that makes intaraction with an OpenAPI key Endpoint',
    stack:'Vite JS, CSS',
    github: 'https://github.com/golddick/chat_ai',
    demo: 'https://chat-ai-iota.vercel.app/'
  },

]

const port = () => {
  return (
    <section id='port'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

        <Swiper className='container portfolio_container'
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={50}
        slidesPerView={2}
      
        pagination={{ clickable: true }}
  
      >
       {
         data.map(({id, image, title,desc,stack, github, demo}) => {
           return(
            <SwiperSlide key={id} className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={image} alt ={title} />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p><i>{stack}</i></p>
            <div className='portfolio_item-cta'>
            < a href= {github} className='btn' target='_blank'>Github</a>
            < a href= {demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </SwiperSlide>
           )
         })
       }
        </Swiper>
         </section>
  )
}

export default port