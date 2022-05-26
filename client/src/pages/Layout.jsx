import React from 'react';
import Switch from '@mui/material/Switch';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';

//Components
import Sidebar from '../components/Sidebar';
import MovieSelector from '../components/MovieSelector';

const Layout = () => {
  const [darkMode, setDarkMode] = React.useState(getDefaultMode());

  function getDefaultMode() {
    const selectedMode = JSON.parse(localStorage.getItem('darkMode'));
    return selectedMode || false;
  }

  React.useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode]);

  // ----- Render -----

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <nav>
        <div className='button-container'>
          <p>🌑</p>
          <Switch
            className='switch'
            onClick={() => setDarkMode(prevMode => !prevMode)}
            defaultChecked={darkMode ? false : true}
            color="default" />
          <p>☀️</p>
        </div>
      </nav>
      <div className='all-container'>
        <div className='content'>
          <Sidebar />
          <MovieSelector />
        </div>
      </div>
      <footer className="App-footer">
        <h3>Footer</h3>
      </footer>
    </div >
  );
};

export default Layout;