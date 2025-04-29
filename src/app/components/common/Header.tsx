'use client';

import React from 'react';
import styles from "../../../styles/layout.module.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { useScrollY } from "@/hooks/useScrollY";
import { useDarkMode } from "@/app/components/DarkModeProvider";

const Header: React.FC = () => {
    const scrollY = useScrollY();
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <header className={`${styles.header} ${scrollY > 50 ? styles.scrolled : ""}`}>
            <div className={styles.navArea}>
                <ul className={styles.headerNav}>
                    <li><a href="#career">이력</a></li>
                    <li><a href="#skills">기술</a></li>
                    <li><a href="#projects">프로젝트</a></li>
                    <li><a href="#portfolio">포트폴리오</a></li>
                    <li><a href="#edu-cert">학력</a></li>
                </ul>
            </div>

            <button className={styles.themeToggle} onClick={toggleDarkMode}>
                {isDarkMode ? <FaMoon size={20}/> : <FaSun size={20}/>}
            </button>
        </header>
    );
};

export default Header;
