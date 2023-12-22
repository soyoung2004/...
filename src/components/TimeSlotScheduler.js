import React, { useState } from 'react';

const TimeSlotScheduler = ({ time }) => {
  const [schedule, setSchedule] = useState('');

  const handleAddSchedule = () => {
    // 여기서는 간단하게 console.log로 일정을 출력합니다.
    console.log(`일정 추가 - ${time}:00 - ${schedule}`);
    setSchedule('');
  };

  return (
    <div>
      <h3>{`${time}:00 시간대 일정 추가`}</h3>
      <div>
        <label>
          일정:
          <input type="text" value={schedule} onChange={(e) => setSchedule(e.target.value)} />
        </label>
      </div>
      <button onClick={handleAddSchedule}>일정 추가</button>
    </div>
  );
};

export default TimeSlotScheduler;
