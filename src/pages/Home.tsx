import React from 'react'
import HeroSection from '../ui/sections/HeroSection'
import HowWork from '../ui/sections/HowWork'
import TopFeature from '../ui/sections/TopFeature'
import AssignmentHelping from '../ui/sections/AssignmentHelping'
import AssignmentForm from '../components/AssignmentForm'
import ContactUs from '../ui/sections/ContactUs'
import Testimonial from '../ui/sections/Testimonial'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AssignmentForm />
            <HowWork />
            <TopFeature />
            <AssignmentHelping />
            {/* <Testimonial/> */}
            <ContactUs/>
        </div>
    )
}

export default Home