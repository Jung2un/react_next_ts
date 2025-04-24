"use client";

import React from 'react';
import styles from "../../styles/layout.module.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { useScrollY } from "@/hooks/useScrollY";

interface HeaderProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
    const scrollY = useScrollY();

    return (
        <header className={`${styles.header} ${scrollY > 50 ? styles.scrolled : ""}`}>
            <button className={styles.themeToggle} onClick={toggleDarkMode}>
                {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
        </header>
    );
};

export default Header;
