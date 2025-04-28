import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');
    const city = searchParams.get('q');

    const apiKey = process.env.WEATHER_API_KEY;

    if (lat && lon) {
        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=kr`, {
            next: { revalidate: 1800 },
        });
        const weatherData = await weatherRes.json();
        return NextResponse.json(weatherData);
    }

    if (city) {
        const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`, {
            next: { revalidate: 1800 },
        });
        const forecastData = await forecastRes.json();
        return NextResponse.json(forecastData);
    }

    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
}
