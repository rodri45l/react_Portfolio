import React from 'react'
import './nav.css'
import {IoHome} from 'react-icons/io5'
import {FaUserCircle} from 'react-icons/fa'
import {MdComputer, MdEmail} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import  { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
<a href="#" onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}><IoHome/></a>
<a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserCircle/></a>
<a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
<a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdEmail/></a>
   </nav>
  )
}

export default Nav