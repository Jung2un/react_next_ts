import {FC, ReactNode} from "react";
import styles from "@/app/page.module.css";

interface SectionProps {
    children: ReactNode;
}

const Section: FC<SectionProps> = ({ children }) => {
    return (
        <div className={styles.mainContent}>
            {children}
        </div>
    );
};

export default Section;