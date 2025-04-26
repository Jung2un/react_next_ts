interface WeatherData {
    weather: { main: string; description: string }[];
    clouds: { all: number };
}

export function getWeatherStatus(data: WeatherData): string {
    const { weather, clouds } = data;
    const mainWeather = weather[0]?.main || '';


    if (mainWeather === 'Rain' || mainWeather === 'Drizzle') {
        return '☔';
    }

    if (mainWeather === 'Thunderstorm') {
        return '🌩️';
    }

    if (mainWeather === 'Snow') {
        return '❄️';
    }

    if (mainWeather === 'Clear') {
        return '☀️'
    }

    if (mainWeather === 'Clouds') {
        return '☁️';
    }

    return '날씨 정보 없음';
}
