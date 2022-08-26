import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary a__talk'>Download CV</a>
        <a href="#contact" className='btn btn-primary a__talk'>Let's Talk</a>
    </div>
  )
}

export default CTA