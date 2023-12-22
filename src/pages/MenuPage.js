import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

const MenuPage = () => {
  const [brightness, setBrightness] = useState(50); // 초기 밝기 값
  const [isLoggedIn, setLoggedIn] = useState(true); // 로그인 상태
  const [isHelpOpen, setHelpOpen] = useState(false); // 도움말 팝업 상태
  const [isSettingOpen, setSettingOpen] = useState(false); // 설정 팝업 상태
  const history = useNavigate();

  const handleBrightnessChange = (value) => {
    setBrightness(value);
    // 실제로는 밝기 조절 로직을 추가해야 합니다.
  };

  const handleLogout = () => {
    setLoggedIn(false);
    // 로그아웃 로직 및 로그인 버튼 표시 로직을 추가해야 합니다.
  };

  const handleHelp = () => {
    // 도움말 버튼 클릭 시 도움말 팝업 열기
    setHelpOpen(true);
  };

  const openSetting = () => {
    // 설정 버튼 클릭 시 설정 팝업 열기
    setSettingOpen(true);
  };

  const closeHelp = () => {
    // x 아이콘 클릭 시 도움말 팝업 닫기
    setHelpOpen(false);
  };

  const closeSetting = () => {
    // x 아이콘 클릭 시 설정 팝업 닫기
    setSettingOpen(false);
  };

  return (
    <div>
      <h2>Menu</h2>

      <Modal
        isOpen={isSettingOpen}
        onRequestClose={closeSetting}
        contentLabel="설정 팝업"
      >
        <h2>메뉴</h2>
        
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
        <button onClick={handleHelp}>도움말</button>

        {/* 내용 추가 */}
        <button onClick={closeSetting}>닫기</button>
      </Modal>

      <button onClick={openSetting}>설정</button>
    </div>
  );
};

export default MenuPage;
