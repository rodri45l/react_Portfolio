import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import SAL from '../../assets/sal.png'

const header = () => {
  return (
    <header>
        <AnimationOnScroll animateIn="animate__tada">
                <img className='salute_img' src={SAL} alt="" />  
        </AnimationOnScroll>
      <div className="container header_container">
        
        <h5>Hello I'm</h5>
        <h1>Rodrigo Lara</h1>
        <h5 className="text-ligth">Software Developer</h5>

        
        <CTA />
        <HeaderSocials/>
        
        <div className="me">
            
                <img className='me_img' src={ME} alt="" />
            

          
        </div>
        

      </div>
    </header>
  )
}

export default header