import React from 'react';
import HeroSection from '../ui/sections/HeroSection';
import Writer from '../ui/sections/Writer';
const HowWork = React.lazy(() => import('../ui/sections/HowWork'));
const TopFeature = React.lazy(() => import('../ui/sections/TopFeature'));
const AssignmentHelping = React.lazy(() => import('../ui/sections/AssignmentHelping'));
const AssignmentForm = React.lazy(() => import('../components/AssignmentForm'));
const ContactUs = React.lazy(() => import('../ui/sections/ContactUs'));
const Testimonial = React.lazy(() => import('../ui/sections/Testimonial'));

const Home = () => {

    return (
        <>
            <HeroSection />
            <AssignmentForm />
            <HowWork />
            <Writer />
            <TopFeature />
            <AssignmentHelping />
            <Testimonial />
            <ContactUs />
        </>
    );
};

export default Home;
