import { React, useState } from "react";
import {loginbg} from '../../images'
import { server } from "../../server";
import axios from "axios";
import '../Login/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/user/login-user`,
        {
          email,
          password,
        },
      )
      .then((res) => {
        alert("Login Success!");
        navigate("/");
        window.location.reload(true); 
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

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
              <form onSubmit={handleSumbit}>
              <input type='email' id='email' name='email' placeholder='Email addresss' className='input-box' autocomplete="off" required value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
              <input type='password' id='password' name='password' placeholder='Password' className='input-box' autocomplete="off" required value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
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