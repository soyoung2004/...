import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FriendListPage = ({ friends, onFriendSelect }) => {
  // friends가 undefined일 경우 빈 배열로 초기화
  const friendsList = friends || [];

  return (
    <div>
      <h3 style={{ fontSize: '38px' }}>친구 목록</h3>
      {friendsList.length === 0 ? (
        <p>친구가 없습니다.</p>
      ) : (
        <ul>
          {friendsList.map((friend) => (
            <li key={friend.id} onClick={() => onFriendSelect(friend.id)}>
              {friend.name} {/* Assuming there is a 'name' property */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FriendListPage;
