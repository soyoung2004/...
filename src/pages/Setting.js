import React, { useState } from 'react';
import Modal from 'react-modal';
import FontChangeButton from '../components/FontChangeButton';
import ColorChangeButton from '../components/CalendarColorChangeButton';
import FontPreview from '../components/FontPreview';

const Setting = () => {
  const [isSettingOpen, setSettingOpen] = useState(false);

  const openSetting = () => {
    setSettingOpen(true);
  };

  const closeSetting = () => {
    setSettingOpen(false);
  };

  return (
    <div>
      <button onClick={openSetting}>설정</button>

      <Modal
        isOpen={isSettingOpen}
        onRequestClose={closeSetting}
        contentLabel="설정 팝업"
      >
        <h2>설정</h2>

        {/* FontChangeButton */}
        <FontChangeButton />

        {/* FontPreview */}
        <FontPreview />

        {/* ColorChangeButton */}
        <ColorChangeButton />

        <button onClick={closeSetting}>닫기</button>
      </Modal>
    </div>
  );
};

export default Setting;
