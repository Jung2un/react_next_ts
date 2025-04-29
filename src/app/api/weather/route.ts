import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const lat = searchParams.get('lat');
        const lon = searchParams.get('lon');
        const city = searchParams.get('q');

        const apiKey = process.env.WEATHER_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: 'API 키가 설정되지 않았습니다.' }, { status: 500 });
        }

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

        return NextResponse.json({ error: '파라미터가 없습니다.' }, { status: 400 });

    } catch (error) {
        console.error('날씨 API 처리 실패:', error);
        return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
    }
}
