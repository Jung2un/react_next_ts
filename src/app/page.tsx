"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./page.module.css";
import Header from "@/components/Header";
import LeftMenu from "@/components/LeftMenu";

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    // 다크모드 상태 변경 함수
    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem("theme", newMode ? "dark" : "light");

        // CSS 변수 설정
        document.documentElement.style.setProperty("--background", newMode ? "#1E1F21" : "#ffffff");
        document.documentElement.style.setProperty("--foreground", newMode ? "#ededed" : "#171717");
    };

    // 로컬 스토리지에서 다크모드 상태 불러오기
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.style.setProperty("--background", "#1E1F21");
            document.documentElement.style.setProperty("--foreground", "#ededed");
        }
    }, []);

    return (
        <div>
            <Head>
                <title>메인 페이지</title>
                <meta name="main" content="메인페이지 입니다." />
            </Head>

            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <LeftMenu isMenuOpen={isMenuOpen} isDarkMode={isDarkMode} />

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

            <button onClick={() => setIsMenuOpen((prev) => !prev)}>Toggle Menu</button>
        </div>
    );
};

export default Home;
