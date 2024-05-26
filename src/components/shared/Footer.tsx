import React from 'react'
import Button from '../inputs/Button'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import gatewayimg from '/assets/images/gatewayimg.jpeg'

const Footer = () => {
  return (
    <footer className='bg-primary_100 py-8 px-4  md:p-14 flex justify-between gap-8 text-primary'>
      <div className='flex flex-col gap-6 '>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>
          Ready to get started?
        </h1>
        <p className='opacity-50 text-sm sm:text-base pr-4'>"Elevate excellence — where precision meets potential, and success is standard."</p>
        <div className='flex flex-col gap-y-4 sm:flex-row gap-2 sm:items-center'>
          <a href={'/#contactus'}>
            <Button className='bg-primary rounded-lg px-10 font-semibold h-12 w-fit active:scale-95 ease-in-out duration-100'><span className='text-transparent bg-clip-text bg-primary_100'>Contact us</span></Button></a>
          <div className='flex gap-2 items-center'>
            <Link to={'/'} className='border-2 rounded-full p-1.5'><Facebook className='w-5 h-5' /></Link>
            <Link to={'/'} className='border-2 rounded-full p-1.5'><Instagram className='w-5 h-5' /></Link>
            <Link to={'/'} className='border-2 rounded-full p-1.5'><Linkedin className='w-5 h-5' /></Link>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-sm pr-4 sm:w-2/3'>Disclaimer: The reference papers provided by MyAssignmentnest.com serve as model papers for students and are not to be submitted as it is. These papers are intended to be used for research and reference purposes only.</p>

        </div>
      </div>
      <div className='w-full flex justify-end'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-2 '>
            <h1 className='font-semibold text-lg text-start'>Navigation</h1>
            <Link to={'/'} className='hover:opacity-50 duration-150 ease-in  '>
              Home
            </Link>
            <a href={'/#reviews'} className='hover:opacity-50 duration-150 ease-in '>
              Reviews
            </a>
            <a href={'/#freetools'} className={"hover:opacity-50 duration-150 ease-in"}>
              Free Tools
            </a>
          </div>
          <div className=''><p className=''>100% Secure Payment</p> <img src={gatewayimg} className='w-44' alt="" /></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer