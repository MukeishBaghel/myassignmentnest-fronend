import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='fixed top-0 left-0 w-full z-[999]'>
        <Navbar />
      </div>
      <main className='min-h-screen mt-28 sm:mt-24'>{children}</main>
      <Footer />
    </>
  )
}

export default CommonLayout