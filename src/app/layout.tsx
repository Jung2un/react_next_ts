"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import LeftMenu from "@/app/components/LeftMenu";
import layout from "./page.module.css";
import "./globals.css";
import {ToastContainer} from "react-toastify";

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

        document.documentElement.style.setProperty("--background", newMode ? "#f3f3f3" : "rgba(41, 42, 45, 0.87)");
        document.documentElement.style.setProperty("--foreground", newMode ? "#1E1F21" : "#ededed");
    };

    // 로컬 스토리지에서 다크모드 상태 불러오기
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.style.setProperty("--background", "#ededed");
            document.documentElement.style.setProperty("--foreground", "#1E1F21");
        }
    }, []);

    return (
        <html>
            <body className={layout.pretend}>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>

            <div className={layout.mainLayout} id="__next">
                <div>
                    <LeftMenu isMenuOpen={isMenuOpen} isDarkMode={isDarkMode}/>
                </div>
                <div className={layout.flex}>
                    {children}
                </div>
                <ToastContainer position="top-right" hideProgressBar autoClose={1000}/>
            </div>
            </body>
        </html>
    );
}
