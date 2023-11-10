import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import injectContext from './store/AppContext'
import Home from './pages/Home'
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/register' element={<Register />} />
            <Route path="/" element={<Home />} />
        </Routes>
        <ToastContainer />
    </BrowserRouter>
  )
}

export default injectContext(App)