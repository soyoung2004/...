import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FriendAddPage = ({ onAddFriend }) => {
  const [friendId, setFriendId] = useState('');
  const [friendPhoneNumber, setFriendPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  const handleAddFriend = () => {
    // Check if inputs are valid
    if (!friendId.trim() || !friendPhoneNumber.trim()) {
      setError('아이디와 전화번호를 모두 입력하세요.');
      return;
    }

    // Check if onAddFriend is a valid function
    if (onAddFriend && typeof onAddFriend === 'function') {
      // Call onAddFriend function to add a friend
      onAddFriend({ id: friendId, phoneNumber: friendPhoneNumber });

      // Reset input values and error
      setFriendId('');
      setFriendPhoneNumber('');
      setError(null);
    } else {
      setError('유효하지 않습니다. 다시 시도하세요.');
    }
  };

  return (
    <div>

      <h2>친구 추가 페이지</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>
          아이디:
          <input type="text" value={friendId} onChange={(e) => setFriendId(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          전화번호:
          <input
            type="text"
            value={friendPhoneNumber}
            onChange={(e) => setFriendPhoneNumber(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleAddFriend}>친구 추가</button>
    </div>
  );
};  

export default FriendAddPage;
