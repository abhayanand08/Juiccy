import { Link, useNavigate } from 'react-router-dom'
import {React, useEffect, useState} from 'react'
import {registerbg} from '../../images'
import '../Register/Register.css'
import axios from 'axios' 
import { server } from '../../server'
import { useSelector } from 'react-redux'

export default function Register() {

    const navigate = useNavigate();

    const { isAuthenticated } = useSelector((state) => state.user);
  
    useEffect(() => {
      if(isAuthenticated){
        navigate('/');
      }
    },[])
   
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState(null);

    const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      setAvatar(file);
    };

    const handleSubmit = async (e) => {
       e.preventDefault();

       const config = {headers: {"Content-Type" : "multipart/form-data"}} ;
       const form = new FormData();
       form.append("name",name);
       form.append("email",email);
       form.append("password",password);
       form.append("avatar", avatar);

        axios.post(`${server}/user/create-user`, form, config)
        .then((res) => {

          // alert(res.data.message)

          setName("");
          setEmail("");
          setPassword("");
          setAvatar();

          navigate('/login')

        }).catch((error) =>{
          // alert(error.response.data.message);
        })
      };


  return (
    <div className='main-reg'>
       <div className='container-reg'>
        <div className="card-reg">
          <div className="rightside">
            <img src={registerbg} alt='bg'/>
            {/* <h2>Welcome Back!</h2>
            <p>To order a glass full of happiness please login with your personal info</p> */}
          </div>
          <div className="leftside">
             <div className='heading'>
               <h2>Hello there!</h2>
               <p>Kindly fill the details to register and gift a glass of happiness.</p>
              </div>
              <form onSubmit={handleSubmit}>
              <input type='name' 
              id='name' 
              name='name' 
              placeholder='Full Name' 
              className='input-box' 
              autocomplete="off" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              />  
              <input type='email' 
              id='email' 
              name='email' 
              placeholder='Email addresss' 
              className='input-box' 
              autocomplete="off" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <input type='password' 
              id='password' 
              name='password' 
              placeholder='Password' 
              className='input-box' 
              autocomplete="off" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <input type='file' 
              id='avatar' 
              name='avatar' 
              placeholder='Upload a file' 
              className='input-image' 
              accept=".jpg,.jpeg,.png"
              onChange={handleFileInputChange}/>
               
              <button type='sumbit'>Register</button>
              <p>Already have an account? <Link to='/login'>Login</Link></p>
             </form>

          </div>
        </div>
      </div>
    </div>
  )
}

