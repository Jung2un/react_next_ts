import Head from 'next/head';
import styles from './page.module.css'
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>jungeun</title>
            </Head>
            <section className={styles.headingMd}>
                <p>[jungeun Introduction]</p>
                <p>(This is website)</p>
            </section>
            <section className={`${styles.headingMd} ${styles.pading1px}`}>
                <h2 className={styles.headingLg}>Blog</h2>
                <ul className={styles.list}>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </div>
    );
};

export default Home;
