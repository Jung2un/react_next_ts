'use client';

import Modal from 'react-modal';
import {useEffect, useState} from 'react';
import styles from './WeatherModal.module.css';

interface Forecast {
    date: string;
    max: number;
    min: number;
}

export default function WeatherPortfolioModal() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [data, setData] = useState<Forecast[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const appElement = document.getElementById('__next');
            if (appElement) {
                Modal.setAppElement(appElement);
            }
        }
    }, []);;

    const openModal = async () => {
        setIsOpen(true);

        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=Seoul&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
        );
        const json = await res.json();

        const dailyMap: { [key: string]: number[] } = {};
        json.list.forEach((item: any) => {
            const date = item.dt_txt.split(' ')[0];
            if (!dailyMap[date]) dailyMap[date] = [];
            dailyMap[date].push(item.main.temp_min, item.main.temp_max);
        });

        const summary = Object.entries(dailyMap)
            .slice(0, 7)
            .map(([date, temps]) => ({
                date,
                min: Math.min(...temps),
                max: Math.max(...temps),
            }));

        setData(summary);
    };

    const closeModal = () => { setIsOpen(false)} ;

    return (
        <>
            <button onClick={openModal} className={styles.link}>이동 →</button>

            <Modal
                isOpen={modalIsOpen}
                className={styles.modal}
                onRequestClose={closeModal}
                shouldCloseOnEsc={false}
                shouldCloseOnOverlayClick={false}
                overlayClassName={styles.overlay}
            >
                <h2>📅 서울 일주일 날씨 예보</h2>
                <button onClick={closeModal} className={styles.close}>✖</button>
                <div className={styles.weatherGrid}>
                    {data.map((d, i) => (
                        <div key={i} className={styles.weatherCard}>
                            <p><b>{d.date}</b></p>
                            <p>🌡 최고: {d.max}°C</p>
                            <p>❄ 최저: {d.min}°C</p>
                        </div>
                    ))}
                </div>
            </Modal>
        </>
    );
}
