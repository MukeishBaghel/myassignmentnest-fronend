import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import CommonLayout from './components/layouts/CommonLayout'
import Loader from './components/shared/Loader'
import OrderTable from './components/admin/OrderTable';
import PaymentTable from './components/admin/PaymentTable';

const AdminLayout = React.lazy(() => import('./components/layouts/AdminLayout'));
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
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <Suspense fallback={<><Loader /></>}>
      <Routes>
        <Route path='/' index element={<CommonLayout><Home /></CommonLayout>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<CommonLayout><NotFound /></CommonLayout>} />
        <Route path='/admin' element={<AdminLayout><Admin /></AdminLayout>} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/samples' element={<Samples />} />
        <Route path='/admin/all-orders' element={<AdminLayout><OrderTable /></AdminLayout>} />
        <Route path='/admin/all-payments' element={<AdminLayout><PaymentTable /></AdminLayout>} />
        <Route path='/admin/order-payment/:id' element={<AdminLayout><PaymentTable /></AdminLayout>} />

        {/* <Route path='/admin/order/:orderId' element={<AdminLayout><OrderById /></AdminLayout>} /> */}

        <Route path='/coming-soon' element={<CommonLayout><ComingSoon /></CommonLayout>} />
      </Routes>
    </Suspense>
  )
}

export default Routers
