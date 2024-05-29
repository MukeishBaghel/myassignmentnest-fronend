import React from 'react'
import Button from '../inputs/Button'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import gatewayimg from '/assets/images/gatewayimg.jpeg'

const Footer = () => {
  return (
    <footer className='bg-primary_100 p-4 sm:p-12 '>
      <section className=' grid grid-cols-2  gap-y-6 sm:gap-14 lg:grid-cols-4 justify-items-center place-content-between align-middle  text-primary'>
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
              <Link to={'https://www.instagram.com/myassignmentnest/'} className='border-2 rounded-full p-1.5'><Instagram className='w-5 h-5' /></Link>
              <Link to={'https://www.linkedin.com/in/my-assignment-nest-0b637730b/'} className='border-2 rounded-full p-1.5'><Linkedin className='w-5 h-5' /></Link>
            </div>
          </div>
          <p className='text-sm pr-4 max-sm:hidden'>Disclaimer: The reference papers provided by MyAssignmentnest.com serve as model papers for students and are not to be submitted as it is. These papers are intended to be used for research and reference purposes only.</p>

        </div>
        <div className='flex flex-col gap-2 max-sm:text-sm max-lg:justify-self-end'>
          <h1 className='font-semibold text-lg '>Our Policy</h1>
          <Link to={"/privacy-policy"} className='hover:opacity-50 duration-150 ease-in  '>
            Privacy Policy
          </Link>
          <Link to={'/terms-and-conditions'} className='hover:opacity-50 duration-150 ease-in '>
            Terms And Conditions
          </Link>
          <Link to={'/refund-policy'} className='hover:opacity-50 duration-150 ease-in '>
            Refund policy
          </Link>
          <Link to={'/fair-use-policy'} className='hover:opacity-50 duration-150 ease-in '>
            Fair Use Policy
          </Link>

        </div>
        <div className='flex flex-col gap-2 max-sm:text-sm '>
          <h1 className='font-semibold text-lg text-start text-nowrap'>Contact us</h1>
          <Link to={"mailto:support@myassignmentnest.com"} >
            Email: <span className='hover:opacity-50 duration-150 ease-in '>
              support@myassignmentnest.com

            </span>
          </Link>
          <Link to={'tel:+918439223922'} >
            Phone: <span className='hover:opacity-50 duration-150 ease-in '>+918439223922</span>
          </Link>
        </div>
        <div className='flex flex-col gap-4 justify-between max-sm:text-sm justify-self-end'>
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
          <div className=''><p className='italic'>100% Secure Payment</p> <img src={gatewayimg} className='w-28 lg:w-44' alt="" /></div>
        </div>

      </section>
      <p className='text-sm pr-4 pt-5 text-white sm:hidden'>Disclaimer: The reference papers provided by MyAssignmentnest.com serve as model papers for students and are not to be submitted as it is. These papers are intended to be used for research and reference purposes only.</p>
    </footer>
  )
}

export default Footer