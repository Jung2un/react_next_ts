"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import LeftMenu from "@/components/LeftMenu";
import layout from "./page.module.css";
import "./globals.css";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    // 다크모드 상태 변경 함수
    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem("theme", newMode ? "dark" : "light");

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
        <html>
            <body className={layout.pretend}>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>

            <div className={layout.mainLayout}>
                <div>
                    <LeftMenu isMenuOpen={isMenuOpen} isDarkMode={isDarkMode}/>
                </div>
                <div className={layout.flex}>
                    {children}
                </div>
            </div>
            </body>
        </html>
    );
}
