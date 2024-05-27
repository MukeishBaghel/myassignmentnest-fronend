import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import whatsapp from '/assets/images/whatsapp.png'
import { Link } from 'react-router-dom'

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='fixed top-0 left-0 w-full z-[999]'>
        <Navbar />
      </div>
      <main className='min-h-screen mt-28 sm:mt-24'>{children}</main>
      <Footer />
      <Link to={'https://wa.me/message/TWMAGNZXPVLQG1'} className='fixed bottom-8 right-6 z-[999] inline-block'>
        <img src={whatsapp} className='h-10 w-10 sm:h-14 sm:w-14 active:scale-95 hover:opacity-85' alt="" /></Link>
    </>
  )
}

export default CommonLayout