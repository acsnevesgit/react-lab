import React, { useContext } from 'react';
import Switch from '@mui/material/Switch';

// Components
import { DarkModeContext } from '../contexts/DarkModeContext';
import AvatarModal from '../components/AvatarModal';

const ModeSwitch = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  }

  // ----- Render -----

  return (
    <div className='button-container'>
      <p>🌑</p>
      <Switch
        className='switch'
        onClick={handleClick}
        defaultChecked={darkMode ? false : true}
        color='default'
      />
      <p>☀️</p>
      <AvatarModal />
    </div>
  )
};

export default ModeSwitch;