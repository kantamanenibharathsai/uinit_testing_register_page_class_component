import React from 'react';
import './App.css';
import Register from './components/register/Register';
import Login from './components/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing_page/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
