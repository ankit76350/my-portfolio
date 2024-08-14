import React from 'react'
import './Hero.css'
import B210125ME_Ankit_Kumar from '../../assets/resume/B210125ME_Ankit_Kumar.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import About from '../About/About'
import MyWork from '../MyWork/MyWork'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Hero = () => {
    return (
        <>
            <div id='home' className="hero">
                <img src='./assets/myProfile/ankitImage.png' alt="" />
                <h1> <span>I'm Ankit Kumar</span> Full Stack developer.</h1>
                <p>
                    I'm a Full Stack Developer with a robust background in both frontend and backend technologies. I specialize in building dynamic and interactive web applications using the MERN stack (MongoDB, Express.js, React, Node.js).
                </p>
                <div className="hero-action">
                    <div className="hero-connect">
                        <AnchorLink className='anchor-link' offset={50} href='#contact'>
                            Connect With Me
                        </AnchorLink>
                    </div>
                    {/* <a href={profile_img} className="hero-resume" target='_blank' >My Resume</a> */}
                    <a href={B210125ME_Ankit_Kumar} className="hero-resume" target='_blank' >My Resume</a>
                    {/* <a href='./assets/myProfile/ankitImage.JPG' className="hero-resume" target='_blank' >My Resume</a> */}
                </div>
            </div>

            <About />
        {/* <Services /> */}
        <MyWork />
        <Contact />
        </>
    )
}

export default Hero
