// import React from 'react'
// import './test.css'
// import IMG from '../../assests/011.jpg'
// import IMG1 from '../../assests/002.jpg'
// import IMG2 from '../../assests/009.jpg'
// import IMG4 from '../../assests/005.jpg'
// import IMG5 from '../../assests/008.jpg'

// import { Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';


// const data = [
//   {
//     id: 3,
//     image: IMG5,
//     title: 'My Energy drink',
//     body: 'Lorem ipsum dolor sicing elit. Quo placeat nobis facilis numquam pariit ex quisquam sapiente a eos optio asperiores, beatae, illo quam sint. Neque, ipsam.',
   
//   },
//   {
//     id: 4,
//     image: IMG,
//     title: 'My Energy drink',
//     body: 'Lorem ipsum dolor sicing elit. Quo placeat nobis facilis numquam pariit ex quisquam sapiente a eos optio asperiores, beatae, illo quam sint. Neque, ipsam.',
   
//   },
//   {
//     id: 5,
//     image: IMG1,
//     title: 'My Energy drink',
//     body: 'Lorem ipsum dolor sicing elit. Quo placeat nobis facilis numquam pariit ex quisquam sapiente a eos optio asperiores, beatae, illo quam sint. Neque, ipsam.',
   
//   },
//   {
//     id: 6,
//     image: IMG2,
//     title: 'My Energy drink',
//     body: 'Lorem ipsum dolor sicing elit. Quo placeat nobis facilis numquam pariit ex quisquam sapiente a eos optio asperiores, beatae, illo quam sint. Neque, ipsam.',
   
//   },
//   {
//     id: 3,
//     image: IMG4,
//     title: 'My Energy drink',
//     body: 'Lorem ipsum dolor sicing elit. Quo placeat nobis facilis numquam pariit ex quisquam sapiente a eos optio asperiores, beatae, illo quam sint. Neque, ipsam.',
   
//   },
//   {
//     id: 4,
//     image: IMG5,
//     title: 'My Energy drink',
//     body: 'Lorem ipsum dolor sicing elit. Quo placeat nobis facilis numquam pariit ex quisquam sapiente a eos optio asperiores, beatae, illo quam sint. Neque, ipsam.',
   
//   },
  
// ]


// const test = () => {
//   return (
//     <section id='test'>
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>

//       <Swiper className='container testimonials_container'
//         // install Swiper modules
//         modules={[ Pagination]}
//         spaceBetween={40}
//         slidesPerView={2}
      
//         pagination={{ clickable: true }}
  
//       >

//      {
//       data.map(({id, image, title, body}) => {
//         return (
//           <SwiperSlide key={id} className='testimonial'>
//           <div className='client_avater'>
//             <img src= {image} alt=''/>
//           </div>
          
//           <h5 className='client_name'>{title}</h5>
//             <small className='client_review'>
//              {body}   </small>
//         </SwiperSlide>
//         )
//         })
//       }
//        </Swiper>
//     </section>
//   )
// }

// export default test