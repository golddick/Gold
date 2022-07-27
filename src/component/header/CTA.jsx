import React from 'react'
import CV from '../../assests/ReactJSNotesForProfessionals.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Lets's Talk</a>
    </div>
  )
}

export default CTA