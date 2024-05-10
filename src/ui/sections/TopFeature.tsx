import React from 'react'
import { TopFeatureCardData } from '../../constants/StaticData'



const TopFeatureCard = ({ img, heading, content }: { img: string, heading: string, content: string }) => {
    return (
        <article className='w-full lg:w-[310px] flex gap-2'>
            <img src={img} alt="" className='self-start w-14 h-14 sm:w-20 sm:h-20' />
            <div>
                <h1 className='font-bold text-lg lg:text-xl '>{heading}</h1>
                <p className='text-sm sm:text-base text-secondary-foreground pt-4 leading-7'>{content}</p>
            </div>
        </article>
    )
}

const TopFeature = () => {
    return (
        <section className='container py-10'>
            <h1 className='text-4xl leading-[3rem] max-md:text-center md:text-5xl md:leading-[3.75rem] lg:text-6xl xl:text-7xl lg:!leading-[4.5rem] font-[500] text-center bg-primary_100 bg-clip-text text-transparent lg:px-20'>
                Our Top work Features
            </h1>
            <p className='text-[#5F5F5F] text-center py-8 text-lg '>Discover why we’re the top choice for professional writing assistance.</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mt-5'>
                {
                    TopFeatureCardData.map((item, i) => (
                        <TopFeatureCard img={item.img} heading={item.heading} content={item.content} key={i} />
                    ))
                }
            </div>
        </section>
    )
}

export default TopFeature