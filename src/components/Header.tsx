"use client";

import styles from "./layout.module.css";
import { useScrollY } from "@/hooks/useScrollY";

const Header = () => {
    const scrollY = useScrollY();

    return (
        <header className={`${styles.header} ${scrollY > 50 ? styles.scrolled : ''}`}>

        </header>
    );
};

export default Header;
