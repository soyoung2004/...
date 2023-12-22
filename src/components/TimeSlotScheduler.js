import React, { useState } from 'react';

const TimeSlotScheduler = () => {
  const [selectedTime, setSelectedTime] = useState(''); // 선택된 시간대
  const [scheduleContent, setScheduleContent] = useState('');

  const handleAddSchedule = () => {
    // 여기서는 간단하게 console.log로 일정을 출력합니다.
    console.log(`일정 추가 - ${selectedTime} - ${scheduleContent}`);
    // 추가한 내용 초기화
    setSelectedTime('');
    setScheduleContent('');
  };

  // 시간대 선택 옵션
  const timeOptions = Array.from({ length: 24 }, (_, index) => index);

  // 스타일 객체 정의
  const style = {
    fontSize: '24px',
  };

  // 간격을 위한 스타일 객체 정의
  const spacerStyle = {
    height: '23px',
  };

  return (
    <div className="time-slot-scheduler">
      <div className="scheduler-row">
        <label className="scheduler-label" style={style} fontSize={24}>
          시간대:
          <select className="time-selector" style={style} value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} fontSize={24}>
            <option value="">시간대 선택</option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {`${time}:00`}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="spacer" style={spacerStyle}></div>

      <div className="scheduler-row">
        <label className="scheduler-label" style={style} fontSize={24}>
          일정 내용:
          <input
            type="text"
            className="schedule-input"
            style={style}
            value={scheduleContent}
            onChange={(e) => setScheduleContent(e.target.value)}
          />
        </label>
      </div>
      <button className="add-schedule-button" style={style} onClick={handleAddSchedule} fontSize={24}>
        일정 추가
      </button>
    </div>
  );
};

export default TimeSlotScheduler;
