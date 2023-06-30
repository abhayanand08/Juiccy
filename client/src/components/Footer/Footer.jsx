import React from 'react'
import '../Footer/Footer.css'
import {FaFacebookF} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
        <div className="toppart">
        <div className="leftside-footer">
           <h2>Juiccy</h2>
           <h5>Freshness all around</h5>
           <div className="social-icon">
             <FaFacebookF className='social-img'/>
             
           </div>
        </div>
        <div className="rightside-footer">

        </div>
        </div>
        <div className="bottompart">
            <p>Copyright © 2023 All rights reserved | Juiccy - Developed by Abhay Anand</p>
        </div>
    </footer>
  )
}

export default Footer