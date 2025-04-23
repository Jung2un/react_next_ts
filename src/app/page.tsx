"use client";

import Head from "next/head";

const Home = () => {
    return (
        <div>
            <Head>
                <title>메인 페이지</title>
                <meta name="main" content="메인페이지 입니다."/>
            </Head>

            <div className="main-content">
                <h1>메인 페이지</h1>
                <p></p>
            </div>

        </div>
    );
};

export default Home;
