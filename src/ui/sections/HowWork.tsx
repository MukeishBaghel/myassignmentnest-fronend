import React from 'react'
import formIcon from '/assets/icons/form.svg'
import courier from '/assets/icons/courierservices.svg'
import solutions from '/assets/icons/Solution.svg'
import arrow from '/assets/icons/arrow.svg'
import Button from '../../components/inputs/Button'
import GradientButton from '../../components/inputs/GradientButton'



const HowWork = () => {

    return (
        <section className='container py-10'>
            <h1 className='text-4xl leading-[3rem] max-md:text-center md:text-5xl md:leading-[3.75rem] lg:text-6xl xl:text-7xl xl:!leading-[5.25rem] lg:!leading-[4.5rem] font-[500] text-center bg-primary_100 bg-clip-text text-transparent lg:px-20'>How Our Online Assignment Help Services Work?
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center w-full gap-2 gap-y-10 justify-between mt-14'>
                <article className='text-center'>
                    <div className='bg-primary shadow-primary_shadow p-6 lg:p-10 rounded-full w-fit mx-auto'>
                        <img src={formIcon} alt="" className='w-20 h-20' />
                    </div>
                    <h1 className='text-primary-foreground font-semibold text-xl sm:text-2xl xl:text-3xl py-4'>
                        Fill order form
                    </h1>
                    <p className='text-secondary-300 md:text-lg xl:text-xl px-2'>
                        Specify the deadline and assignment duration on the order form.
                    </p>
                </article>
                <img src={arrow} alt="" className='md:self-start w-14 lg:w-20 md:mt-10 max-md:rotate-90 sm:hidden lg:block' />
                <article className='text-center  '>
                    <div className='bg-primary shadow-primary_shadow p-6 lg:p-10 rounded-full w-fit mx-auto'>
                        <img src={courier} alt="" className='w-20 h-20' />
                    </div>
                    <h1 className='text-primary-foreground font-semibold text-xl sm:text-2xl xl:text-3xl py-4'>
                        Pay for Services
                    </h1>
                    <p className='text-secondary-300 md:text-lg xl:text-xl font-normal px-2'>
                        After payment, your order is confirmed, and we offer various convenient payment methods.
                    </p>
                </article>
                <img src={arrow} alt="" className='md:self-start w-14 lg:w-20 md:mt-10 max-md:rotate-90 sm:hidden lg:block' />
                <article className='text-center'>
                    <div className='bg-primary shadow-primary_shadow p-6 lg:p-10 rounded-full w-fit mx-auto'>
                        <img src={solutions} alt="" className='w-20 h-20' />
                    </div>
                    <h1 className='text-primary-foreground font-semibold text-xl sm:text-2xl xl:text-3xl py-4'>
                        View the solution
                    </h1>
                    <p className='text-secondary-300 md:text-lg xl:text-xl  font-[400] px-2'>
                        Assignment writer notifies upon completion. View solution in user account.
                    </p>
                </article>
            </div>
            <div className='flex items-center justify-center mt-10'>
                <GradientButton className='px-7 text-lg lg:text-2xl'>Book now</GradientButton>
            </div>
        </section>
    )
}

export default HowWork