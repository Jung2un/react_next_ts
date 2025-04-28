"use client";

import React from "react";
import ResumeSection from "@/app/components/resume/ResumeSection";
import ScrollToTopButton from "@/app/components/common/ScrollToTopButton";

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
