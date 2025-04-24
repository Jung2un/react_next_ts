"use client";

import React from "react";
import ResumeSection from "@/app/components/ResumeSection";
import IntroSection from "@/app/components/IntroSection";
import PortfolioSection from "@/app/components/PortfolioSection";

const Home = () => {
    return (
        <main>
            <section id="resume">
                <ResumeSection/>
            </section>

            <section id="intro">
                <IntroSection/>
            </section>

            <section id="portfolio">
                <PortfolioSection/>
            </section>
        </main>
    );
};

export default Home;
