import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Activation, Homepage, Register} from './Routes.js';
import Store from './redux/store';
import { loadUser } from './redux/actions/UserAction';
import Loginpg from './pages/Layout/Loginpg';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import Profile from './pages/Profile/Profile';
import ProtectedRoute from './ProtectedRoute';
import { useSelector } from 'react-redux';

function App() {

  const {isAuthenticated} = useSelector((state) => state.user);
  
  useEffect(() =>{
        Store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Loginpg />} />
      <Route path='/register' element={<Register />} />
      <Route path='/activation/:activation_token' element={<Activation />}  />
      <Route path='/product/:name' element={<ProductDetailsPage />} />

      <Route path='/profile' element={<Profile />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
