"use client";

import React from "react";
import ResumeSection from "@/app/components/ResumeSection";
import IntroSection from "@/app/components/IntroSection";
import PortfolioSection from "@/app/components/PortfolioSection";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";

const Home = () => {
    return (
        <div className="main-content">
            <section id="resume">
                <ResumeSection />
            </section>

            <section id="intro">
                <IntroSection />
            </section>

            <section id="portfolio">
                <PortfolioSection />
            </section>

            <ScrollToTopButton />
        </div>
    );
};

export default Home;
