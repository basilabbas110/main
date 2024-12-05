import React from 'react';
import Register from './Register';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
    
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
