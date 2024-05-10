import React from 'react'
import Button from '../inputs/Button'
import { NavItems } from '../../constants/NavItems'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-primary_100 py-8 px-4  md:p-16 flex items-center justify-between gap-2 text-primary'>
      <div className='flex flex-col gap-8 items-start shrink'>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold !leading-3'>
          Ready to get started?
        </h1>
        <p className='opacity-50 text-sm sm:text-base pr-4'>"Elevate excellence — where precision meets potential, and success is standard."</p>
        <Button className='bg-primary rounded-lg px-10 font-semibold py-2'><span className='text-transparent bg-clip-text bg-primary_100'>Contact us</span></Button>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='font-semibold text-lg'>Navigation</h1>
        {NavItems.map((item) => (
          <NavLink to={item.path} key={item.name} className={({ isActive }) => `${isActive && "text-primary-100"} text-[0.93rem] ${!isActive && " hover:opacity-50"} `}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </footer>
  )
}

export default Footer