import React from 'react'
import { aboutimg } from '../../images'
import '../About/About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='main-about'>
        <div className="left-part">
          <h2>What We Serve</h2>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <Link to='#'><button>Read More</button></Link>
        </div>
        <div className="right-part">
          <img src={aboutimg} alt="juiccy" />
        </div>
    </div>
  )
}

export default About