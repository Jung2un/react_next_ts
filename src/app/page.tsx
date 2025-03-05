"use client";

import { useState } from "react";
import Head from "next/head";
import styles from "./page.module.css";
import Header from "@/components/Header";
import LeftMenu from "@/components/LeftMenu";

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <div>
            <Head>
                <title>메인 페이지</title>
                <meta name="main" content="메인페이지 입니다." />
            </Head>

            <Header />
            <LeftMenu isMenuOpen={isMenuOpen} />


            <main className={styles.mainContent}>
                <section className={styles.section}>
                    <h2>Header Title</h2>
                </section>

                <div className={styles.h2000}>
                    {Array.from({ length: 50 }, (_, i) => (
                        <p key={i}>text {i + 1}</p>
                    ))}
                </div>
            </main>

            <button onClick={toggleMenu}>Toggle Menu</button>
        </div>
    );
};

export default Home;
