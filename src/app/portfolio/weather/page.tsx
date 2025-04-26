'use client';

import Modal from 'react-modal';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import styles from './WeatherModal.module.css';
import modalStyles from '../../../styles/modal.module.css';
import { getWeatherStatus } from "@/utils/getWeatherStatus";
import { formatDate, getKoreanDayName, cityKoreanToEnglish } from "@/utils/utils";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import useModalEffect from "@/hooks/useModalEffect";

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

interface Forecast {
    date: string;
    max: number;
    min: number;
    weatherMain: string;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WeatherModal(props: ModalProps) {
    const { isOpen, onClose } = props;
    const [data, setData] = useState<Forecast[]>([]);
    const [city, setCity] = useState<string>('서울');
    const [viewMode, setViewMode] = useState<'table' | 'chart'>('table');

    useModalEffect(isOpen);

    // location call
    useEffect(() => {
        const fetchLocation = async () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        try {
                            const res = await fetch(
                                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&lang=kr`
                            );
                            const data = await res.json();
                            if (data.name) {
                                const koreanCity = Object.keys(cityKoreanToEnglish).find(
                                    (kor) => cityKoreanToEnglish[kor] === data.name
                                );
                                setCity(koreanCity || '서울');
                            }
                        } catch (error) {
                            console.error('위치 가져오기 실패', error);
                            setCity('서울');
                        }
                    },
                    (error) => {
                        console.error('위치 허용 실패', error);
                        setCity('서울');
                    }
                );
            }
        };

        if (isOpen) {
            fetchLocation();
        }
    }, [isOpen]);

    // api call
    useEffect(() => {
        const fetchWeather = async () => {
            const englishCity = cityKoreanToEnglish[city] || 'Seoul';
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${englishCity}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
                );
                const json = await res.json();

                if (!json.list) {
                    console.error('날씨 데이터 없음', json);
                    return;
                }

                const dailyMap: { [key: string]: { temps: number[]; weatherMain?: string } } = {};

                json.list.forEach((item: any) => {
                    const date = item.dt_txt.split(' ')[0];
                    if (!dailyMap[date]) {
                        dailyMap[date] = { temps: [], weatherMain: item.weather[0]?.main };
                    }
                    dailyMap[date].temps.push(
                        Math.floor(item.main.temp_min),
                        Math.floor(item.main.temp_max)
                    );
                });

                const summary = Object.entries(dailyMap)
                    .slice(0, 7)
                    .map(([date, { temps, weatherMain }]) => ({
                        date,
                        min: Math.min(...temps),
                        max: Math.max(...temps),
                        weatherMain: weatherMain || '',
                    }));

                setData(summary);
            } catch (error) {
                console.error('날씨 가져오기 실패', error);
            }
        };

        if (isOpen && city) {
            fetchWeather();
        }
    }, [isOpen, city]);

    const chartData = {
        labels: data.map(d => d.date),
        datasets: [
            {
                label: '최고기온',
                data: data.map(d => d.max),
                borderColor: 'rgba(255,99,132,1)',
                backgroundColor: 'rgba(255,99,132,0.2)',
            },
            {
                label: '최저기온',
                data: data.map(d => d.min),
                borderColor: 'rgba(54,162,235,1)',
                backgroundColor: 'rgba(54,162,235,0.2)',
            },
        ],
    };

    return (
        <Modal
            isOpen={isOpen}
            className={modalStyles.modal}
            overlayClassName={modalStyles.overlay}
            onRequestClose={onClose}
            shouldCloseOnEsc={false}
            shouldCloseOnOverlayClick={false}
        >
            <h2 className={styles.ls}>🌈 {city} 날씨 예보</h2>

            <div className={styles.viewButtons}>
                <button
                    onClick={() => setViewMode('table')}
                    className={viewMode === 'table' ? styles.active : ''}
                >
                    표
                </button>
                <button
                    onClick={() => setViewMode('chart')}
                    className={viewMode === 'chart' ? styles.active : ''}
                >
                    차트
                </button>
            </div>

            <button onClick={onClose} className={modalStyles.close}>✖</button>

            {viewMode === 'table' ? (
                <div className={styles.weatherTable}>
                    {data.map((d, i) => (
                        <div key={i} className={styles.weatherRow}>
                            <div className={styles.left}>
                                <div className={styles.dayInfo}>
                                    <span className={styles.day}>{getKoreanDayName(d.date)}</span>
                                    <span className={styles.date}>{formatDate(d.date)}</span>
                                </div>
                            </div>

                            <div className={styles.right}>
                                <div className={styles.tempInfo}>
                                    <span>{d.min}° / {d.max}°</span>
                                </div>
                                <div className={styles.weatherIcon}>
                                    {getWeatherStatus({
                                        weather: [{main: d.weatherMain, description: ''}],
                                        clouds: {all: 0}
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.chartContainer}>
                    <Line data={chartData}/>
                </div>
            )}
        </Modal>
    );
}