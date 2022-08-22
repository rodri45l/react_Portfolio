import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Rodrigo Lara</h1>
        <h5 className="text-ligth">Software Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header