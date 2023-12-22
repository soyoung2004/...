import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HelpPage from './HelpPage';
import Modal from 'react-modal';

const Setting = () => {
  const [brightness, setBrightness] = useState(50);
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [isSettingOpen, setSettingOpen] = useState(false);
  const history = useNavigate();

  const handleBrightnessChange = (value) => {
    setBrightness(value);
    // Add actual brightness adjustment logic
  };

  const handleLogout = () => {
    setLoggedIn(false);
    // Add logout logic and update the login button display logic
  };

  const openSetting = () => {
    setSettingOpen(true);
  };

  const closeSetting = () => {
    setSettingOpen(false);
  };

  return (
    <div>

      <button onClick={openSetting}>메뉴 열기</button>

      {/* Setting modal */}
      {isSettingOpen && (
        <Modal
          isOpen={isSettingOpen}
          onRequestClose={closeSetting}
          contentLabel="설정 팝업"
        >
          <h2>설정</h2>

          {/* 밝기 조절 슬라이더 */}
          <label>
            밝기 조절:
            <input
              type="range"
              min="0"
              max="100"
              value={brightness}
              onChange={(e) => handleBrightnessChange(e.target.value)}
            />
          </label>

          {/* 로그아웃 또는 로그인 버튼 */}
          {isLoggedIn ? (
            <button onClick={handleLogout}>로그아웃</button>
          ) : (
            <button onClick={() => history.push('/login')}>로그인</button>
          )}

          {/* 도움말 버튼 */}
          <button onClick={() => history.push('/help')}>도움말</button>

          <button onClick={closeSetting}>닫기</button>
        </Modal>
      )}
    </div>
  );
};

export default Setting;
