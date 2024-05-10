import React from 'react'
import rating from '/assets/images/rating.svg'
import abhinavImg from '/assets/images/abhinav.svg'
const Testimonial = () => {
    return (
        <section className='container min-h-screen py-10 max-w-5xl relative'>
            <h1 className='text-4xl leading-[3rem] max-md:text-center md:text-5xl md:leading-[3.75rem] lg:text-6xl xl:text-7xl lg:!leading-[4.5rem] font-[500] text-center bg-primary_100 bg-clip-text text-transparent lg:px-20'>Testimonials
            </h1>
            <p className='text-[#8C8888] text-center py-6 text-lg lg:text-2xl font-normal '>Get Our subscription to minimize your work load and get success.</p>
            <article className=' p-6 w-[518px] bg-[#F7F6FB] rounded-2xl'>
                <div className='flex gap-4'>
                    <img src={abhinavImg} alt="" className='self-start'/>
                    <div>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-2xl font-semibold'>Abhinav</h1>
                            <img src={rating} alt="" />
                        </div>
                        <p className='py-4'>
                            &quot; I struggled with my assignments until I found this platform. The resources and support here are fantastic, and I've seen a significant improvement in my grades! &quot;
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Testimonial