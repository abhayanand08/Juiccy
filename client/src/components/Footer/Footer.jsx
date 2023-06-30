import React from 'react'
import '../Footer/Footer.css'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
        <div className="toppart">

        <div className="leftside-footer">

           <h2>Juiccy</h2>
           <h5>Freshness all around</h5>
           <div className="social-icon">
             <div className="social-imgbox">
             <FaFacebookF className='social-img'/>
             </div>
             <div className="social-imgbox">
             <AiFillInstagram className='social-img'/>
             </div>
             <div className="social-imgbox">
             <FaLinkedinIn className='social-img'/>
             </div>
           </div>

        </div>
        <div className="rightside-footer">
          <div className="other-links">
          <h3>Quick Links</h3>  
          <ul className="activelinks">
            <Link to='/'>About</Link>
            <Link to='/faqs'>FAQs</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/'>Drink</Link>
          </ul>
          </div>
          <div className="address">
            <h3>Get in touch</h3>
            <p>B.I.T Sindri 828123, Dhanbad Jharkhand</p>
            <h5>+91 8789103538</h5>
            <h4>abhayanandjsr@gmail.com</h4>
          </div>

        </div>
        </div>
        <div className="bottompart">
            <p>Copyright © 2023 All rights reserved | Juiccy - Developed by Abhay Anand</p>
        </div>
    </footer>
  )
}

export default Footer