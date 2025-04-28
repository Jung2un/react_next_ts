"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from "../../styles/layout.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "@/app/components/DarkModeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LeftMenuProps {
    isMenuOpen: boolean;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ isMenuOpen }) => {
    const { isDarkMode } = useDarkMode();
    const [copied, setCopied] = useState(false);
    const [showEmail, setShowEmail] = useState(false);

    const email = "j_eun_2@naver.com";

    const handleCopy = async () => {
        if (copied) return;

        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);

            toast.success("이메일 주소가 복사되었습니다.");
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            toast.error("다시 시도해주세요.");
        }
    };

    return (
        <div className={`${styles.leftMenu} ${isMenuOpen ? styles.open : ""} ${isDarkMode ? styles.dark : styles.light}`}>
            <div className={styles.introSection}>
                <img
                    src="https://avatars.githubusercontent.com/u/122095401?v=4"
                    alt="Profile Img"
                    className={styles.profileImage}
                />
                <div className={styles.nameSection}>
                    <h3 className={styles.profileTitle}>JE</h3>
                </div>
                <div className={styles.contactInfo}>
                    <a
                        href="https://github.com/Jung2un"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactButton}
                    >
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <span
                        className={styles.contactButton}
                        onClick={handleCopy}
                        onMouseEnter={() => setShowEmail(true)}
                        onMouseLeave={() => {
                            setShowEmail(false);
                            setCopied(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        {showEmail && (
                            <span className={styles.emailText}>
                                {email}
                            </span>
                        )}
                    </span>
                </div>
            </div>

            <ul className={styles.menuList}>
                <li><a href="#career">이력</a></li>
                <li><a href="#skills">기술</a></li>
                <li><a href="#projects">프로젝트</a></li>
                <li><a href="#portfolio">포트폴리오</a></li>
                <li><a href="#edu-cert">학력</a></li>
            </ul>
        </div>
    );
};

export default LeftMenu;
