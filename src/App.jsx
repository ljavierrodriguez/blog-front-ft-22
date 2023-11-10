import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/register' element={<Register />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App