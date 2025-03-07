"use client";

import React from "react";
import styles from "./layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

interface LeftMenuProps {
    isMenuOpen: boolean;
    isDarkMode: boolean;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ isMenuOpen, isDarkMode }) => {
    return (
        <div className={`${styles.leftMenu} ${isMenuOpen ? styles.open : ""}`} style={{ backgroundColor: isDarkMode ? "#1E1F21" : "#ffffff", color: isDarkMode ? "#ededed" : "#171717" }}>
            <div className={styles.introSection}>
                <img
                    src="https://avatars.githubusercontent.com/u/122095401?v=4"
                    alt="Profile Img"
                    className={styles.profileImage}
                />
                <div className={styles.nameSection}>
                    <a
                        href="https://github.com/Jung2un"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactButton}
                    >
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <h3 className={styles.profileTitle}>Jungeun</h3>
                </div>
                <div className={styles.contactInfo}>
                    <p className={styles.contactText}>
                        <FontAwesomeIcon icon={faPhone}/> 010-5555-1672
                    </p>
                    <p className={styles.contactText}>
                        <FontAwesomeIcon icon={faEnvelope}/> j_eun_2@naver.com
                    </p>
                </div>
            </div>

            <ul className={styles.menuList}>
                <li>자기소개</li>
                <li>포트폴리오</li>
                <li>이력서</li>
            </ul>
        </div>
    );
};

export default LeftMenu;
