"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "./page.module.css"; // CSS 모듈을 사용

const Home = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <Head>
                <title>My Page</title>
            </Head>

            <header className={`${styles.header} ${scrollY > 50 ? styles.scrolled : ""}`}>
                <div className={styles.headerContent}>
                    <h1 className={styles.headerTitle}>B</h1>
                </div>
            </header>

            {/* left container 추가 */}

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
        </div>
    );
};

export default Home;
