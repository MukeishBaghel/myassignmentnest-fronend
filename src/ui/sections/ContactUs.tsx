import React from 'react'
import TextField from '../../components/inputs/TextField'
import GradientButton from '../../components/inputs/GradientButton'

const ContactUs = () => {
    return (
        <section className='container  pt-10 pb-14 max-w-7xl px-10 '>
            <h1 className='text-4xl leading-[3rem] max-md:text-center md:text-5xl md:leading-[3.75rem] lg:text-6xl xl:text-7xl lg:!leading-[4.5rem] font-[500] text-center bg-primary_100 bg-clip-text text-transparent lg:px-20'>Contact us
            </h1>
            <p className='text-[#8C8888] text-center py-6 text-lg lg:text-2xl font-normal '>Connect with us share your thoughts</p>
            <main className='grid grid-cols-2 gap-20 lg:gap-40 mt-10'>
                <div className='flex flex-col gap-12'>
                    <TextField placeholder='First Name' />
                    <TextField placeholder='Email' />
                </div>
                <div className='flex flex-col gap-12'>
                    <TextField placeholder='Last Name' />
                    <TextField placeholder='Phone Number' />

                </div>
            </main>
            <TextField placeholder='Write your Message' className='mt-12' />
            <div className='flex items-center justify-center mt-14'>
                <GradientButton className='lg:px-8 text-lg lg:text-xl'>Send Message</GradientButton>
            </div>
        </section>
    )
}

export default ContactUs