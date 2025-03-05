'use client'

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "../globals.css"
import AboutHero from "@/components/About/AboutHero/AboutHero";
import Mission from "@/components/About/Mission/Mission";
import Vision from "@/components/About/Vision/Vision";
import Journey from "@/components/About/Journey/Journey";
import WhyStaco from "@/components/About/WhyStaco/WhyStaco";
import MeetTheTeam from "@/components/About/MeetTheTeam/MeetTheTeam";
import AboutCTA from "@/components/About/AboutCTA/AboutCTA";
import WhatDriveUs from "@/components/About/WhatDriveUs/WhatDriveUs";

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <AboutHero />
            <Mission />
            <Vision />
            <Journey />
            <WhatDriveUs />
            <WhyStaco />
            <MeetTheTeam />
            <AboutCTA />
            <Footer />  
        </>
    )
}

export default AboutPage;