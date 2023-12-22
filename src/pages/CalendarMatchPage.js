import React, { useState, useEffect } from 'react';
import WeekCalendar from '../components/WeekCalendar';
import RoomListPage from './RoomListPage'; // Make sure to import your RoomListPage component

const CalendarMatchPage = ({ selectedRoom, onRoomSelect }) => {
  // Assume that the calendar information for the selected room is fetched and available as selectedRoomCalendar
  // You should replace this with your actual data fetching logic
  const [selectedRoomCalendar, setSelectedRoomCalendar] = useState(null);

  // UseEffect to fetch calendar data when the selected room changes
  useEffect(() => {
    // Replace the following line with your data fetching logic
    // setSelectedRoomCalendar(fetchCalendarData(selectedRoom));

    // For demonstration purposes, set a dummy calendar when no room is selected
    if (!selectedRoom) {
      const dummyCalendar = Array.from({ length: 9 }, () => '가능 시간');
      setSelectedRoomCalendar(dummyCalendar);
    }
  }, [selectedRoom]);

  return (
    <div>
      <h1>일정 맞추기 페이지</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Your Calendar */}
        <div>
          <h2>나의 캘린더</h2>
          {selectedRoomCalendar ? (
            <>
              <WeekCalendar />
            </>
          ) : (
            <p>가능 시간</p>
          )}
        </div>

        {/* Selected Room Calendar */}
        <div>
          <h2>{selectedRoom ? `${selectedRoom}의 캘린더` : '가능 시간 '}</h2>
          {selectedRoomCalendar ? (
            <>
              <WeekCalendar />
            </>
          ) : (
            <>
              <p>멤버 일정</p>
              <button onClick={onRoomSelect}>{selectedRoom ? '다른 방 선택' : '방 선택'}</button>
            </>
          )}
        </div>

        {/* Room List on the Right */}
        <div>
          <RoomListPage />
          <button >방 선택</button>
        </div>
      </div>
    </div>
  );
};

export default CalendarMatchPage;
