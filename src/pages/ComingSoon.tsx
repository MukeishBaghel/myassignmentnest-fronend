import React from 'react'
import GradientButton from '../components/inputs/GradientButton'
import { useNavigate } from 'react-router-dom'
import comingsoon from '/assets/images/comingsoon.svg'

const ComingSoon = () => {
    const navigate = useNavigate()

    return (
        <section className=' relative bg-ribbon bg-no-repeat w-full bg-cover pt-14 min-h-screen'>
            <div className='w-full container px-4 lg:px-20 '>
                <div className='text-center relative z-20 pt-4 '>
                    <h1 className='font-bold  text-4xl sm:text-6xl text-[#1A2E35]'>Coming Soon</h1>
                    <p className='text-[#626262] text-3xl sm:text-4xl tracking-wider py-6 lg:py-10'>&quot; Something exciting <br />is coming &quot;</p>
                    <GradientButton className='px-6 sm:px-8  h-14 text-lg md:text-xl lg:text-2xl' onClick={() => navigate('/')}>
                        Go Back
                    </GradientButton>
                </div>
                <div className='absolute bottom-0 right-0 z-10'>
                    <img src={comingsoon} alt="Coming Soon" loading='lazy' />
                </div>
            </div>
        </section>
    )
}

export default ComingSoon