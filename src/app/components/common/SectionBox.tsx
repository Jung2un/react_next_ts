import React from "react";
import styles from '../resume/ResumeSection.module.css';

interface SectionBoxProps {
    title: string;
    addClass?: string;
    children: React.ReactNode;
}

const titleToId: Record<string, string> = {
    "이력": "career",
    "프로젝트": "projects",
    "기술": "skills",
    "포트폴리오": "portfolio",
    "학력 & 자격": "edu-cert",
    "교육": "training",
};

export default function SectionBox({ title, addClass, children }: SectionBoxProps) {
    const sectionId = titleToId[title] ?? title.toLowerCase().replace(/\s+/g, "-");

    return (
        <div id={sectionId} className={`scroll-offset ${styles.box} ${styles.flex}`}>
            <h3><span className={styles.title}>{title}</span></h3>
            <span className={styles.line}></span>
            <div className={`${styles.flex} ${styles.ml5} ${addClass}`}>
                {children}
            </div>
        </div>
    );
}
