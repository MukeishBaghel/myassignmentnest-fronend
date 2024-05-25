import React from 'react'
import notfoundimg from '/assets/images/404.svg'
import GradientButton from './inputs/GradientButton'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <section className='h-full bg-ribbon bg-no-repeat w-full bg-cover pt-10'>
            <div className='w-full container flex flex-col lg:flex-row items-center justify-between px-4  lg:px-20 gap-10 '>
                <div>
                    <h1 className='font-bold  text-3xl sm:text-5xl'>Ooops...</h1>
                    <p className='text-[#626262] text-3xl sm:text-5xl tracking-wider'>Page not found</p>
                    <p className='text-lg py-10'>Don’t worry , we all take wrong turns sometimes.</p>
                    <GradientButton className='px-6 sm:px-8 mt-10 h-14 text-lg md:text-xl lg:text-2xl' onClick={() => navigate('/')}>
                        Go Back
                    </GradientButton>
                </div>
                <div className=''>
                    <img src={notfoundimg} alt="PageNotFound" loading='lazy' />
                </div>
            </div>
        </section>
    )
}

export default NotFound