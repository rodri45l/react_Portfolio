import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>RODRIGO</a>
        <ul className="permalink">
            <li><a href='#'>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio"> Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_copyright">
           <small> Copyright &copy; 2022 Rodrigo Lara</small>
        </div>
    </footer>
  )
}

export default Footer