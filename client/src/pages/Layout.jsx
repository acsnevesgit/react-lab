import React, { useEffect, useState } from 'react';
import { useStickyBox } from 'react-sticky-box';
import { NavLink, Outlet } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// Components
import BasicModal from '../components/BasicModal';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(getDefaultMode());

  const stickyRef = useStickyBox({
    offsetTop: 20,
    offsetBottom: 20,
    bottom: false
  });

  // ----- Setters and getters -----

  function getDefaultMode() {
    const selectedMode = JSON.parse(localStorage.getItem('darkMode'));
    return selectedMode || false;
  };

  useEffect(() => {
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
            color='default' />
          <p>☀️</p>
          <BasicModal />
        </div>
      </nav>
      <div className='all-container'>
        <div className='content'>
          <List>
            <div className='sidebar' ref={stickyRef}>
              <NavLink to='/homepage'><ListItem disablePadding><ListItemButton><ListItemText className='choice' primary='Home' /></ListItemButton></ListItem></NavLink>
              <NavLink to='/cardpayment'><ListItem disablePadding><ListItemButton><ListItemText className='choice' primary='Card payment' /></ListItemButton></ListItem></NavLink>
              <NavLink to='/customcounter'><ListItem disablePadding><ListItemButton><ListItemText className='choice' primary='Custom counter' /></ListItemButton></ListItem></NavLink>
              <NavLink to='/datepicker'><ListItem disablePadding><ListItemButton><ListItemText className='choice' primary='Date picker' /></ListItemButton></ListItem></NavLink>
              <NavLink to='/email'><ListItem disablePadding><ListItemButton><ListItemText className='choice' primary='Email' /></ListItemButton></ListItem></NavLink>
              <NavLink to='/formvalidation'><ListItem disablePadding><ListItemButton><ListItemText className='choice' primary='Form validation' /></ListItemButton></ListItem></NavLink>
              <NavLink to='/imagelist'><ListItem disablePadding><ListItemButton><ListItemText className='choice' primary='Image List' /></ListItemButton></ListItem></NavLink>
              <NavLink to='/languageselector'><ListItem disablePadding><ListItemButton><ListItemText className='choice' primary='Language selector' /></ListItemButton></ListItem></NavLink>
              <NavLink to='/listmanagement'><ListItem disablePadding><ListItemButton><ListItemText className='choice' primary='List management' /></ListItemButton></ListItem></NavLink>
              <NavLink to='/moviesearch'><ListItem disablePadding><ListItemButton><ListItemText className='choice' primary='Movie Search' /></ListItemButton></ListItem></NavLink>
              <NavLink to='/progressbar'><ListItem disablePadding><ListItemButton><ListItemText className='choice' primary='Progress Bar' /></ListItemButton></ListItem></NavLink>
              <NavLink to='/stepperedit'><ListItem disablePadding><ListItemButton><ListItemText className='choice' primary='Stepper Edit' /></ListItemButton></ListItem></NavLink>
              <NavLink to='/timelinegraph'><ListItem disablePadding><ListItemButton><ListItemText className='choice' primary='Timeline Graph' /></ListItemButton></ListItem></NavLink>
            </div>
          </List>
          <Outlet />
        </div>
      </div>
      <footer className='footer'>
        {/* <h3>Footer</h3> */}
      </footer>
    </div >
  );
};

export default Layout;