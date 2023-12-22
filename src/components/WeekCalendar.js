import React, { useState } from 'react';

const WeekCalendar = () => {
  const [currentWeek, setCurrentWeek] = useState(4);

  const handleNextWeek = () => {
    setCurrentWeek((prevWeek) => prevWeek + 1);
  };

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
            <th></th>
            <th style={{ padding: '8px' }}>일</th>
            <th style={{ padding: '8px' }}>월</th>
            <th style={{ padding: '8px' }}>화</th>
            <th style={{ padding: '8px' }}>수</th>
            <th style={{ padding: '8px' }}>목</th>
            <th style={{ padding: '8px' }}>금</th>
            <th style={{ padding: '8px' }}>토</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 9 }, (_, index) => index + 9).map((time) => (
            <tr key={time}>
              <td>{`${time}:00`}</td>
              <td style={{ paddingBottom: '8px' }}>일정없음</td>
              <td style={{ paddingBottom: '8px' }}>일정없음</td>
              <td style={{ paddingBottom: '8px' }}>일정없음</td>
              <td style={{ paddingBottom: '8px' }}>일정없음</td>
              <td style={{ paddingBottom: '8px' }}>일정없음</td>
              <td style={{ paddingBottom: '8px' }}>일정없음</td>
              <td style={{ paddingBottom: '8px' }}>일정없음</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeekCalendar;
