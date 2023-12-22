import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TimeSlotScheduler from '../components/TimeSlotScheduler';
import WeekCalendar from '../components/WeekCalendar'; // 파일 이름이 WeekCalendar인지 확인

const CalendarPage = () => {
  return (
    <div>

      <WeekCalendar />
      <TimeSlotScheduler />
    </div>
  );
};

export default CalendarPage;