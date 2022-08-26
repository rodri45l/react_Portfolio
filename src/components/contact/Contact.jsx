import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
        <h5>Get in touch</h5>
        <h1 className='title__contact'>Email me!</h1>
        <div className="container contact__container">
            <div className="contac__options">
                <article className="contact__option">
                    <MdEmail className='contact__option-icon'/>
                    <a href="mailto:rodri45esp@gmail.com">
                        Send a message
                    </a>
                </article>

            </div>
        </div>
    </section>
  )
}

export default Contact