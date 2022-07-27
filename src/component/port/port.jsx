import React from 'react'
import './port.css'
import CAR from  '../../assests/014.jpg'
import CAR1 from  '../../assests/013.jpg'
import CAR2 from  '../../assests/005.jpg'
import CAR3 from  '../../assests/008.jpg'
import CAR4 from  '../../assests/016.jpg'
import CAR5 from  '../../assests/015.jpg'

const data = [
  {
    id: 1,
    image: CAR,
    title: 'My Energy drink',
    github: '',
    demo: 'https://www.chevrolet.com/performance/corvette'
  },
  {
    id: 2,
    image: CAR1,
    title: 'My Energy drink',
    github: '',
    demo: 'https://www.chevrolet.com/performance/corvette'
  },
  {
    id: 3,
    image: CAR2,
    title: 'My Energy drink',
    github: '',
    demo: 'https://www.chevrolet.com/performance/corvette'
  },
  {
    id: 4,
    image: CAR3,
    title: 'My Energy drink',
    github: '',
    demo: 'https://www.chevrolet.com/performance/corvette'
  },
  {
    id: 5,
    image: CAR4,
    title: 'My Energy drink',
    github: '',
    demo: 'https://www.chevrolet.com/performance/corvette'
  },
  {
    id: 6,
    image: CAR5,
    title: 'My Energy drink',
    github: '',
    demo: 'https://www.chevrolet.com/performance/corvette'
  },
]

const port = () => {
  return (
    <section id='port'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {/* <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={CAR} alt = ''/>
          </div>
          <h3>This is a portfilio item title</h3>
          <div className='portfolio_item-cta'>
          < a href='' className='btn' target='_blank'>Github</a>
          < a href='https://www.chevrolet.com/performance/corvette' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
       {
         data.map(({id, image, title, github, demo}) => {
           return(
            <article key={id} className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={image} alt ={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio_item-cta'>
            < a href= {github} className='btn' target='_blank'>Github</a>
            < a href= {demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default port