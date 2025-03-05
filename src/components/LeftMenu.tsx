"use client";

import React from "react";
import styles from "./layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface LeftMenuProps {
    isMenuOpen: boolean;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ isMenuOpen }) => {
    return (
        <div className={`${styles.leftMenu} ${isMenuOpen ? styles.open : ""}`}>
            <div className={styles.profileSection}>
                <img
                    src="https://avatars.githubusercontent.com/u/122095401?v=4"
                    alt="Profile Img"
                    className={styles.profileImage}
                />
                <h3 className={styles.profileTitle}>Jungeun</h3>
                <div className={styles.contactInfo}>
                    {/* GitHub 버튼 */}
                    <a
                        href="https://github.com/yourgithubusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactButton}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <p className={styles.contactText}>
                        <b>Email:</b> j_eun_2@naver.com
                    </p>
                    <p className={styles.contactText}>
                        <b>Phone:</b> 010-5555-1672
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
