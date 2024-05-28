import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import whatsapp from '/assets/images/whatsapp.png'
import { Link } from 'react-router-dom'
import Modal from '../inputs/Modal'
import GradientButton from '../inputs/GradientButton'
import Button from '../inputs/Button'

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false)
  const setModelClose = () => setIsModelOpen(false)
  const setModelOpen = () => setIsModelOpen(true)
  return (
    <>
      <div className='fixed top-0 left-0 w-full z-[999]'>
        <Navbar />
      </div>
      <main className='min-h-screen mt-28 sm:mt-24'>{children}</main>
      <Footer />
      <Button onClick={setModelOpen} className='fixed bottom-8 right-6 z-[999] inline-block'>
        <img src={whatsapp} className='h-10 w-10 sm:h-14 sm:w-14 active:scale-95 hover:opacity-85' alt="" />
      </Button>
      <Modal isOpen={isModelOpen} onClose={setModelClose}>
        <div className='p-4 max-w-[290px] sm:max-w-[350px]'>
          <h1 className='text-center font-medium text-2xl gradient-text sm:text-3xl'>Ask to Experts</h1>
            <p className='mt-5 text-secondary-200'>"Meet our Expert Minds: Where brilliance meets dedication, and knowledge ignites innovation. Our seasoned experts are the architects of success, ready to empower you with tailored solutions. Click now to unlock a world of expertise!"</p>
          <div className='flex items-center justify-center mt-5'>
            <GradientButton><Link to={'https://wa.me/message/TWMAGNZXPVLQG1'} className=''>
              Connect Now
            </Link></GradientButton>
          </div>
        </div>

      </Modal>
    </>
  )
}

export default CommonLayout