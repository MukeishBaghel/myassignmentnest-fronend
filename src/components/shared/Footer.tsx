import React from 'react'
import Button from '../inputs/Button'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, Phone, PhoneCall, PhoneIcon } from 'lucide-react'
import gatewayimg from '/assets/images/gatewayimg.jpeg'

const Footer = () => {
  return (
    <footer className='bg-primary_100 p-2 sm:p-12 '>
      <section className=' grid grid-cols-2   gap-y-6 sm:gap-10 md:gap-14 xl:grid-cols-4 justify-items-center place-content-between align-middle  text-primary'>
        <div className='flex flex-col gap-6 '>
          <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>
            Ready to get started?
          </h1>
          <p className='opacity-50 text-sm sm:text-base pr-4'>"Elevate excellence — where precision meets potential, and success is standard."</p>
          <div className='flex flex-col gap-y-4 sm:flex-row gap-2 sm:items-center'>
            <a href={'/#contactus'}>
              <Button className='bg-primary rounded-lg px-8 font-semibold h-12 w-fit active:scale-95 ease-in-out duration-100'><span className='gradient-text text-nowrap'>Contact us</span></Button></a>
            <div className='flex gap-2 items-center'>
              <Link to={'/'} className='border-2 rounded-full p-1.5'><Facebook className='w-5 h-5' /></Link>
              <Link to={'https://www.instagram.com/myassignmentnest/'} className='border-2 rounded-full p-1.5'><Instagram className='w-5 h-5' /></Link>
              <Link to={'https://www.linkedin.com/in/my-assignment-nest-0b637730b/'} className='border-2 rounded-full p-1.5'><Linkedin className='w-5 h-5' /></Link>
            </div>
          </div>
          {/* <p className='text-sm pr-4 max-sm:hidden'>Disclaimer: The reference papers provided by MyAssignmentnest.com serve as model papers for students and are not to be submitted as it is. These papers are intended to be used for research and reference purposes only.</p> */}

        </div>
        <div className='flex flex-col gap-2 max-sm:text-sm max-xl:justify-self-end'>
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
        <div className='flex flex-col gap-2 max-sm:text-sm max-xl:justify-self-start'>
          <h1 className='font-semibold text-lg text-start '>Contact us</h1>
          <Link to={"mailto:support@myassignmentnest.com"} className='flex items-center gap-1 flex-wrap'>
            <Mail className='w-4 h-4'/>:
            <span className='hover:opacity-50 duration-150 ease-in truncate max-sm:max-w-[160px]'>
              support@myassignmentnest.com
            </span>
          </Link>
          <Link to={'tel:+918439223922'} className='flex items-center gap-1' >
            <Phone className='w-4 h-4'/>: <span className='hover:opacity-50 duration-150 ease-in '>+91 8439223922</span>
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
          <div className=''><p className='italic'>100% Secure Payment</p> <img src={gatewayimg} className='w-28 lg:w-40' alt="" /></div>
        </div>

      </section>
      <p className='text-sm sm:text-base  pt-5 text-white text-center'>Disclaimer: The reference papers provided by MyAssignmentnest.com serve as model papers for students and are not to be submitted as it is. These papers are intended to be used for research and reference purposes only.</p>
    </footer>
  )
}

export default Footer