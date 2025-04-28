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
            <button className={styles.themeToggle} onClick={toggleDarkMode}>
                {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
        </header>
    );
};

export default Header;
