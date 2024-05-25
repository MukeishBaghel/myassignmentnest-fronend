import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import CommonLayout from './components/layouts/CommonLayout'
import AdminLayout from './components/layouts/AdminLayout'
import Loader from './components/shared/Loader'

const ComingSoon = lazy(() => import('./pages/ComingSoon'))
const Home = lazy(() => import('./pages/Home'))
const Profile = lazy(() => import('./pages/Profile'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Login = lazy(() => import('./pages/Login'))
const SignUp = lazy(() => import('./pages/SignUp'))
const Admin = lazy(() => import('./pages/Admin'))
const Reviews = lazy(() => import('./pages/Reviews'))
const Samples = lazy(() => import('./pages/Samples'))

const Routers = () => {
  return (
    <Suspense fallback={<><Loader /></>}>
      <Routes>
        <Route path='/' element={<CommonLayout><Home /></CommonLayout>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<CommonLayout><NotFound /></CommonLayout>} />
        <Route path='/admin' element={<AdminLayout><Admin /></AdminLayout>} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/samples' element={<Samples />} />
        <Route path='/coming-soon' element={<CommonLayout><ComingSoon /></CommonLayout>} />
      </Routes>
    </Suspense>
  )
}

export default Routers
