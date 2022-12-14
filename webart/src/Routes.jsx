import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';

const RoutesAll = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Home' element={<Home/>} />
       </Routes>
    </BrowserRouter>
  )
}

export default RoutesAll