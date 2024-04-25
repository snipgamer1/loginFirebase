import React, { useEffect, useState } from 'react'
import './styles/tailwind.css'
import './App.css'
import Home from './views/Home'
import Login from './views/login'
import { auth } from './firebase/credenciales'
import { onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter, Route, Routes, redirect} from 'react-router-dom'
import Register from './views/Register'

function App() {

   return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home   />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
