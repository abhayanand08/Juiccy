import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login, Register} from './Routes.js'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
