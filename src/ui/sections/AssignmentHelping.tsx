import React from 'react'
import Button from '../../components/inputs/Button'
import { Link } from 'react-router-dom'
import { AssignmentHelpingData } from '../../constants/StaticData'


const AssignmentHelpingCard = ({ img, heading, textContent, path }: { img: string, heading: string, textContent: string, path: string }) => {
    return (
        <article className='shadow-card_shadow bg-primary text-center w-[275px] h-[250px] p-4 rounded-xl  gap-2 flex flex-col items-center justify-between'>
            <div className='rounded-full bg-primary_100 relative -mt-12 p-3'>
                <img src={img} alt="" className='w-8 h-8 mx-auto ' />
            </div>
            <h1 className='text-xl font-semibold'>{heading}</h1>
            <p className='text-secondary-foreground px-3 text-center'>
                {textContent}
            </p>
            <Button className='bg-primary_100 bg-clip-text text-transparent font-semibold'> <Link to={path}>Check now</Link></Button>
        </article>)
}



const AssignmentHelping = () => {

    return (
        <section className='container my-10 max-w-7xl mx-auto'>
            <h1 className='text-4xl leading-[3rem] max-md:text-center md:text-5xl md:leading-[3.75rem] lg:text-6xl lg:!leading-[4.5rem] font-[500] text-center bg-primary_100 bg-clip-text text-transparent lg:px-20'>
                Assignment helping tools
            </h1>
            <p className='text-[#8C8888] text-center py-8 text-lg md:text-xl lg:text-2xl px-2 '>Discover our collection of high-end academic tools for A+ writing.</p>
            <div className='flex items-center justify-center gap-x-8 gap-y-16 flex-wrap mt-10'>
                {
                    AssignmentHelpingData.map((item, i) => (
                        <AssignmentHelpingCard heading={item.heading} img={item.img} path={item.path} textContent={item.textContent} key={i} />
                    ))
                }
            </div>
        </section>
    )
}

export default AssignmentHelping