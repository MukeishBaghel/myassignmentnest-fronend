import React from 'react'
import heroLady from '/assets/images/herogirl.gif'
import sitejabbar from '/assets/images/sitejabber.svg'
import trustpilot from '/assets/images/trustpilot.svg'
import { Link } from 'react-router-dom'
import heroimg from '/assets/images/heroimg.svg'

const HeroSection = () => {
    return (
        <section className='container lg:px-20 '>
            <div className=' flex items-center justify-between'>
                <div className='w-full md:w-2/3 lg:w-1/2 pt-5'>
                    <h1 className='pt-10 text-4xl leading-[3rem] max-md:text-center md:text-5xl md:leading-[4rem] lg:text-7xl lg:!leading-[5.25rem] font-[500]'>
                        <span className='text-primary-100'> Hey there</span>
                        <span className='bg-primary_100 bg-clip-text text-transparent'>,<br />ready to unlock your academic potential?</span>
                        <div className='flex items-center gap-4 sm:-ml-4 w-full max-md:justify-center mt-4'>
                            <Link to={'https://www.sitejabber.com/reviews/myassignmentnest.com'} target='_blank' rel='noopener noreferrer'> <img src={sitejabbar} alt="" className='w-1/2 min-w-[140px] sm:w-1/3 sm:min-w-[230px] inline-block' /></Link>
                            <Link to={'https://www.trustpilot.com/review/myassignmentnest.com'} target='_blank' rel='noopener noreferrer'><img src={trustpilot} alt="" className='w-1/2 min-w-[140px] sm:w-1/3 sm:min-w-[230px] inline-block' /></Link>
                        </div>
                    </h1>
                </div >
                <div className='hidden md:block'>
                    <img src={heroimg} alt="assignment helper" className='' />
                </div>
            </div>
        </section >
    )
}

export default HeroSection