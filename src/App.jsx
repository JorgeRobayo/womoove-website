import { useState } from 'react'
import Home from './pages/Home/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import IntroBanner from './components/IntroBanner/IntroBanner';
import Products from './pages/Products/Products';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/products" element={<Products/>}></Route> 
      </Routes>
        

    </div>
  )
}

export default App
