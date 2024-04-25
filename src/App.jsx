import React, { useEffect, useState } from 'react'
import './styles/tailwind.css'
import './App.css'
import Home from './views/Home'
import Login from './views/login'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Register from './views/Register'
import Inicio from './views/Inicio'

function App() {

   return (
      <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<Home  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
