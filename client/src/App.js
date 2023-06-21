import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Activation, Login, Register} from './Routes.js';

function App() {
  
  useEffect(() =>{

  }, [])

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/activation/:activation_token' element={<Activation />}  />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
