// 요일 구하기
export function getKoreanDayName(dateString: string) {
    const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const date = new Date(dateString);
    return dayNames[date.getDay()];
}

// 날짜 포맷
export function formatDate(dateString: string) {
    const [, month, day] = dateString.split('-');
    return `${month}.${day}`;
}

// 도시명 매핑
export const cityKoreanToEnglish: { [key: string]: string } = {
    서울: 'Seoul',
    부산: 'Busan',
    대구: 'Daegu',
    인천: 'Incheon',
    대전: 'Daejeon',
    광주: 'Gwangju',
    울산: 'Ulsan',
    세종: 'Sejong',
    수원: 'Suwon',
    창원: 'Changwon',
    고양: 'Goyang',
    용인: 'Yongin',
    청주: 'Cheongju',
    전주: 'Jeonju',
    제주: 'Jeju',
};