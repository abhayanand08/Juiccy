import React from 'react'
import {Link} from 'react-router-dom'
import '../Banner/Banner.css'

const Banner = () => {
  return (
   <>
    <div className='bannerbg'>
       <div className="leftpart">
         <h5>Everyone's Special</h5>
         <h2>Freshness<br/> in every sip</h2>
         <p>Lorem Ipsum has been the <br />industry's standard dummy text ever since the 1500s.</p>
         <Link to='#'><button>Order Now</button></Link>
       </div>
    </div>
    </>   
  )
}

export default Banner