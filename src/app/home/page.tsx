'use client'

import Home from "@/components/Home/Home"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "../globals.css"
import OurSolution from "@/components/Home/OurSolution/OurSolution";
import WhyChooseStaco from "@/components/Home/WhyChooseStaco/WhyChooseStaco";
import OurStrategy from "@/components/Home/OurStrategy/OurStrategy";
import ClientResults from "@/components/Home/ClientResults/ClientResults";
import CustomerRating from "@/components/Home/Customer/Customer";
import DataInsights from "@/components/Home/DataInsights/DataInsights";
import FAQ from "@/components/Home/FAQ/FAQ";
import Advantage from "@/components/Home/Advantage/Advantage";

const HomePage = () => {
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <Home />
            {/* Our Solution Section */}
            <OurSolution />

            {/* Why Choose Staco */}
            <WhyChooseStaco />

            {/* Our Strategy Section */}
            <OurStrategy />

            {/* Client Results Section */}
            <ClientResults />

            {/* Customer Rating Section */}
            <CustomerRating />

            {/* Data Insights Section */}
            <DataInsights />

            {/* FAQ Section */}
            <FAQ />

            {/* Advantage Section*/}
            <Advantage />
            <Footer />
        </>
    )
}

export default HomePage;