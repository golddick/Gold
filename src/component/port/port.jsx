import React from 'react'
import './port.css'
import Gchat from  '../../assests/gchat.png'
import Chatgpt from  '../../assests/gchatgpt.png'
import Ecomm from  '../../assests/ecomm.png'
import Admin from '../../assests/admindashboard.png'
import Afrimart from '../../assests/afrimart.png'
import Topme from '../../assests/topme.png'
import { Pagination,  EffectFade, Navigation, Grid } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import 'swiper/css/navigation'
import 'swiper/css/grid';

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
    stack:'React JS, JavaScript, CSS',
    github: 'https://github.com/golddick/g-chat',
    demo: 'https://g-chat-nine.vercel.app/'
  },
  {
    id: 3,
    image: Chatgpt,
    title: 'G-Chatgpt',
    desc: 'G-chatgpt is a chat bot that makes intaraction with an OpenAPI key Endpoint',
    stack:'React JS,JavaScript, CSS',
    github: 'https://github.com/golddick/chat_ai',
    demo: 'https://chat-ai-iota.vercel.app/'
  },
 {
    id: 4,
    image: Admin,
    title: 'Admin-dashboard',
    desc: '',
    stack:'React JS,JavaScript, CSS',
    github: 'https://github.com/golddick/admin-dashboard.git',
    demo: 'https://admin-golddick.vercel.app/'
  },
  {
    id: 5,
    image: Afrimart,
    title: 'Afrimart E-commerce',
    desc: 'This A product profile that speaks  about the organization and what they offer ',
    stack:'React JS,JavaScript, CSS',
    github: 'https://github.com/golddick/AfrimartCom',
    demo: 'https://afrimart-commerce.vercel.app/'
  },
 {
    id: 6,
    image: Topme,
    title: 'TopMe',
    desc: '',
    stack:'React JS,JavaScript, SCSS',
    github: 'https://github.com/golddick/topme',
    demo: 'https://topme.vercel.app/'
  },
]

const port = () => {
  return (
    <section id='port'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

        
        <div className='container portfolio_container'>
       <>
      <Swiper
        spaceBetween={30}
        effect={"slide"}
        navigation={true}
        grid={{
          rows: 2,
          fill: "row",
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
             300: {
               slidesPerView: 1,
               spaceBetween: 20,
               grid: {
                 rows: 2,
                 fill: "row", 
               },
             },
             600: {
               slidesPerView: 2,
               spaceBetween: 20,
               grid: {
                rows: 2,
                fill: "row",
              },
             },
             1000: {
               slidesPerView:3,
               spaceBetween: 20,
             },
           }}
          
        modules={[EffectFade, Navigation, Pagination, Grid]}
        className="mySwiper"
      >
         {/* <Swiper
       slidesPerView={2}      
       spaceBetween={30}
       grid={{
         rows: 2,
         fill: "row",
       }}
       navigation={{
         nextEl: null, 
         prevEl: null, 
       }}
      //  breakpoints={{
      //    300: {
      //      slidesPerView: 1,
      //      spaceBetween: 20,
      //      grid: {
      //        rows: 2,
      //        fill: "row", 
      //      },
      //    },
      //    600: {
      //      slidesPerView: 2,
      //      spaceBetween: 20,
      //      grid: {
      //       rows: 2,
      //       fill: "row",
      //     },
      //    },
      //    1000: {
      //      slidesPerView:3,
      //      spaceBetween: 20,
      //    },
      //  }}
       modules={[EffectFade, Navigation, Pagination]}
       className="mySwiper"
    > */}

       {
         data.map(({id, image, title,desc,stack, github, demo}) => {
           return(
            <SwiperSlide key={id} className='portfolio_item'>
             <div className='portfolio_item-image'>
              <img src={image} alt={title} className='itemImage' />
         </div>
            <h3>{title}</h3>
            {/* <p>{desc}</p> */}
            <p><i>{stack}</i></p>
            <div className='portfolio_item-cta'>
            < a href= {github} className='btn' rel='noreferrer' target='_blank'>Github </a>
            < a href= {demo} className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a>
            </div>
          </SwiperSlide>
           )
         }) 
       }
       </Swiper>
       </>
       
        </div>
         </section>
  )
}

export default port