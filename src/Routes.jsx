import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import Navbar from './Components/Navbar';

const RoutesAll = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Home' element={
        <div>
          <Navbar/>
        <Home/>
        </div>
        } />
        <Route path='/Login' element={<Login/>} />
        <Route path='/' element={
        <div className='MainApp'>
          <Navbar/>
        <Shop/>
        </div>
        } />
       </Routes>
    </BrowserRouter>
  )
}

export default RoutesAll