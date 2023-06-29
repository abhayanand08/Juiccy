import React, { useEffect } from 'react'
import Login from '../Login/Login'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Loginpg = () => {

  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if(isAuthenticated){
      navigate('/');
    }
  },[])

  return (
    <div>
        <Login />
    </div>
  )
}

export default Loginpg;