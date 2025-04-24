"use client";

import React from "react";
import ResumeSection from "@/app/components/ResumeSection";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";

const Home = () => {
    return (
        <div className="main-content">
            <section id="resume">
                <ResumeSection />
            </section>

            <ScrollToTopButton />
        </div>
    );
};

export default Home;
