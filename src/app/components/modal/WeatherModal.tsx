'use client';

import Modal from 'react-modal';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import styles from './WeatherModal.module.css';
import useModalEffect from "@/hooks/useModalEffect";
import modalStyles from '../../../styles/modal.module.css';
import { getWeatherStatus } from "@/utils/getWeatherStatus";
import { formatDate, getKoreanDayName, cityKoreanToEnglish } from "@/utils/utils";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

interface Forecast {
    date: string;
    max: number;
    min: number;
    weatherMain: string;
}

interface ForecastItem {
    dt_txt: string;
    main: {
        temp_min: number;
        temp_max: number;
    };
    weather: {
        main: string;
    }[];
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WeatherModal({ isOpen, onClose }: ModalProps) {
    const [data, setData] = useState<Forecast[]>([]);
    const [city, setCity] = useState<string>('서울');
    const [viewMode, setViewMode] = useState<'table' | 'chart'>('table');

    useModalEffect(isOpen);

    useEffect(() => {
        if (!isOpen) return;

        const fetchWeatherData = async () => {
            try {
                // 현재 위치 기반 도시 이름 가져오기
                const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                const { latitude, longitude } = position.coords;

                const weatherRes = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`);
                const weatherData = await weatherRes.json();

                const koreanCity = Object.keys(cityKoreanToEnglish).find(
                    (kor) => cityKoreanToEnglish[kor] === weatherData.name
                );

                const selectedCity = koreanCity || '서울';
                setCity(selectedCity);

                // 도시 이름으로 예보 가져오기
                const forecastRes = await fetch(`/api/weather?q=${cityKoreanToEnglish[selectedCity] || 'Seoul'}`);
                const forecastData = await forecastRes.json();

                if (!forecastData.list) {
                    console.error('날씨 예보 데이터 없음');
                    return;
                }

                const dailyMap: { [date: string]: { temps: number[]; weatherMain?: string } } = {};

                (forecastData.list as ForecastItem[]).forEach((item) => {
                    const date = item.dt_txt.split(' ')[0];
                    if (!dailyMap[date]) {
                        dailyMap[date] = { temps: [], weatherMain: item.weather[0]?.main };
                    }
                    dailyMap[date].temps.push(Math.floor(item.main.temp_min), Math.floor(item.main.temp_max));
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
                console.error('날씨 데이터 가져오기 실패', error);
                setCity('서울');
            }
        };

        fetchWeatherData();
    }, [isOpen]);

    const chartData = {
        labels: data.map((d) => d.date),
        datasets: [
            {
                label: '최고기온',
                data: data.map((d) => d.max),
                borderColor: 'rgba(255,99,132,1)',
                backgroundColor: 'rgba(255,99,132,0.2)',
            },
            {
                label: '최저기온',
                data: data.map((d) => d.min),
                borderColor: 'rgba(54,162,235,1)',
                backgroundColor: 'rgba(54,162,235,0.2)',
            },
        ],
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={modalStyles.modal}
            overlayClassName={modalStyles.overlay}
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
                                        weather: [{ main: d.weatherMain, description: '' }],
                                        clouds: { all: 0 },
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.chartContainer}>
                    <Line data={chartData} />
                </div>
            )}
        </Modal>
    );
}