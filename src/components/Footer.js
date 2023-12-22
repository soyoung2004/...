// Footer.js
import React from 'react';
import { FaUser, FaList, FaCalendar, FaCalendarCheck, FaPlusSquare, FaBed } from 'react-icons/fa'; // 각각의 아이콘을 import

const Footer = ({ onPageChange }) => {
  return (
    <div className="footer">
      <button onClick={() => onPageChange('FriendAddPage')}>
        <FaUser />
      </button>
      <button onClick={() => onPageChange('FriendListPage')}>
        <FaList />
      </button>
      <button onClick={() => onPageChange('CalendarPage')}>
        <FaCalendar />
      </button>
      <button onClick={() => onPageChange('CalendarMatchPage')}>
        <FaCalendarCheck />
      </button>
      <button onClick={() => onPageChange('CreateRoomPage')}>
        <FaPlusSquare />
      </button>
      {/* RoomListPage 버튼 추가 */}
      <button onClick={() => onPageChange('RoomListPage')}>
        <FaBed />
      </button>
    </div>
  );
};

export default Footer;






