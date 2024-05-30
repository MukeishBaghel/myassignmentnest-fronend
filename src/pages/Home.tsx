import React, { useState, useEffect } from 'react';
const HeroSection = React.lazy(() => import('../ui/sections/HeroSection'));
const HowWork = React.lazy(() => import('../ui/sections/HowWork'));
const TopFeature = React.lazy(() => import('../ui/sections/TopFeature'));
const AssignmentHelping = React.lazy(() => import('../ui/sections/AssignmentHelping'));
const AssignmentForm = React.lazy(() => import('../components/AssignmentForm'));
const ContactUs = React.lazy(() => import('../ui/sections/ContactUs'));
const Testimonial = React.lazy(() => import('../ui/sections/Testimonial'));
const FakePopUp = React.lazy(() => import('../components/FakePopUp'));

const Home = () => {

    return (
        <>
            <HeroSection />
            {<FakePopUp />}
            <AssignmentForm />
            <HowWork />
            <TopFeature />
            <AssignmentHelping />
            <Testimonial />
            <ContactUs />
        </>
    );
};

export default Home;
