import React from 'react'
import './about.css'
import ME from '../../assets/rcarretera.jpeg'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdComputer} from 'react-icons/md'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        
                            <img src={ME} alt="about image" />
                        
                        
                    </div>
                </div>
            
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <MdComputer className='about__icon'/>
                        <h5>Languages</h5>
                        <ul>
                            <li><small>Python</small></li>
                            <li><small>R</small></li>
                            <li><small>Java</small></li>
                            <li><small>JavaScript</small></li>
                            <li><small>C#</small></li>
                        </ul>
                    </article>
                    <article className="about__card">
                        <AiOutlineFundProjectionScreen   className='about__icon'/>
                        
                        <h5>Projects</h5>
                        <small>90+ Completed</small>
                    </article>

                    
                </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis tortor ultrices, facilisis metus ut, 
                        finibus augue. Donec eget feugiat metus. In laoreet diam eu ex tincidunt, eu accumsan nisl ultricies. 
                        Nunc ultrices leo ac urna sagittis, non vestibulum nisl tempor. Quisque fermentum et purus quis laoreet. 
                        Quisque consequat elit eget diam dapibus, efficitur tincidunt magna imperdiet. Etiam quis finibus felis. 
                    </p>
                    <a href="#contact" className="btn btn-primarY a__talk">Let's talk</a>
            </div>
            </div>
        </section>

    )
}

export default About