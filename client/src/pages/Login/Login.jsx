import React from 'react';
import {loginbg} from '../../images'


import '../Login/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='main'>
       <div className='container'>
        <div className="card">
          <div className="rightside">
            <img src={loginbg} alt='bg'/>
            {/* <h2>Welcome Back!</h2>
            <p>To order a glass full of happiness please login with your personal info</p> */}
          </div>
          <div className="leftside">
             <div className='heading'>
               <h2>Welcome Back!</h2>
               <p>To order a glass full of happiness please login with your personal info.</p>
              </div>
              <form action='/login' method="post">
              <input type='email' id='email' name='email' placeholder='Email addresss' className='input-box' autocomplete="off"/>
              <input type='password' id='password' name='password' placeholder='Password' className='input-box' autocomplete="off"/>
              <div className="forgot"><a href='#'><p>Forgot Password?</p></a></div>
              <button type='sumbit'>Login</button>
              <p>Don't have an account? <Link to='/register'>Register Now</Link></p>
             </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login