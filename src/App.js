
import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Signup from './Components/Signup';
import{
  BrowserRouter,
  Route,
  Routes
  
}from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    
    </>
  
  );
}

export default App;
