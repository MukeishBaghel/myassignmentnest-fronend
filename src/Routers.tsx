import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import CommonLayout from './components/layouts/CommonLayout'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Admin from './pages/Admin'
import Reviews from './pages/Reviews'
import Samples from './pages/Samples'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<CommonLayout><Home /></CommonLayout>} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/reviews' element={<Reviews />} />
      <Route path='/samples' element={< Samples />} />
    </Routes>
  )
}

export default Routers