"use client";

import Head from "next/head";
import Section from "@/components/Section";
const Home = () => {
    return (
        <div>
            <Head>
                <title>메인 페이지</title>
                <meta name="main" content="메인페이지 입니다." />
            </Head>

            <Section>
                <h1>메인 페이지</h1>
                <p></p>
            </Section>

        </div>
    );
};

export default Home;
