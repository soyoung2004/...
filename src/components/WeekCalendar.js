import React, { useState } from 'react';

const WeekCalendar = () => {
  const [currentWeek, setCurrentWeek] = useState(4); // 기본값은 4주차로 설정

  const handleNextWeek = () => {
    setCurrentWeek((prevWeek) => prevWeek + 1);
  };

  // 기본적인 주차 표시 함수, 실제로는 날짜 라이브러리를 사용하거나 서버에서 주차 정보를 받아와야 합니다.
  const formatWeek = (week) => `12월 ${week}주`;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>{formatWeek(currentWeek)}</h2>
        <button onClick={handleNextWeek}>다음 주</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>시간</th>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 9 }, (_, index) => index + 9).map((time) => (
            <tr key={time}>
              <td>{`${time}:00`}</td>
              <td>일정없음</td>
              <td>일정없음</td>
              <td>일정없음</td>
              <td>일정없음</td>
              <td>일정없음</td>
              <td>일정없음</td>
              <td>일정없음</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeekCalendar;

