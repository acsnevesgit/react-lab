import React, { useEffect, useState } from 'react';
import { useStickyBox } from 'react-sticky-box';
import { NavLink, Outlet, Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { AiFillInstagram, AiOutlineInstagram, AiFillFacebook, AiOutlineFacebook, AiFillTwitterCircle, AiOutlineTwitter, AiFillYoutube, AiOutlineYoutube } from "react-icons/ai";

// Components
import BasicModal from '../components/BasicModal';
import logocatdark from '../assets/avatars/octocatdark.png';
import logocatlight from '../assets/avatars/octocatlight.png';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(getDefaultMode());
  const [selectedIndex, setSelectedIndex] = useState(
    () => JSON.parse(localStorage.getItem('selectedIndex')) ?? null);

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

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    localStorage.setItem('selectedIndex', JSON.stringify(selectedIndex))
  }, [selectedIndex]);

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
              <Link className='link-logo' to={'/'}>
                <img className='logo' src={darkMode ? logocatdark : logocatlight} alt='logo' />
              </Link>
              <NavLink to='/cardpayment'>
                <ListItemButton selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}>
                  <ListItemText className='choice' primary='Card payment' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/customcounter'>
                <ListItemButton selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}>
                  <ListItemText className='choice' primary='Custom counter' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/datepicker'>
                <ListItemButton selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}>
                  <ListItemText className='choice' primary='Date picker' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/email'>
                <ListItemButton selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}>
                  <ListItemText className='choice' primary='Email' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/formvalidation'>
                <ListItemButton selected={selectedIndex === 4}
                  onClick={(event) => handleListItemClick(event, 4)}>
                  <ListItemText className='choice' primary='Form validation' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/imagelist'>
                <ListItemButton selected={selectedIndex === 5}
                  onClick={(event) => handleListItemClick(event, 5)}>
                  <ListItemText className='choice' primary='Image List' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/languageselector'>
                <ListItemButton selected={selectedIndex === 6}
                  onClick={(event) => handleListItemClick(event, 6)}>
                  <ListItemText className='choice' primary='Language selector' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/listmanagement'>
                <ListItemButton selected={selectedIndex === 7}
                  onClick={(event) => handleListItemClick(event, 7)}>
                  <ListItemText className='choice' primary='List management' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/moviesearch'>
                <ListItemButton selected={selectedIndex === 8}
                  onClick={(event) => handleListItemClick(event, 8)}>
                  <ListItemText className='choice' primary='Movie Search' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/progressbar'>
                <ListItemButton selected={selectedIndex === 9}
                  onClick={(event) => handleListItemClick(event, 9)}>
                  <ListItemText className='choice' primary='Progress Bar' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/stepperedit'>
                <ListItemButton selected={selectedIndex === 10}
                  onClick={(event) => handleListItemClick(event, 10)}>
                  <ListItemText className='choice' primary='Stepper Edit' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/timelinegraph'>
                <ListItemButton selected={selectedIndex === 11}
                  onClick={(event) => handleListItemClick(event, 11)}>
                  <ListItemText className='choice' primary='Timeline Graph' />
                </ListItemButton>
              </NavLink>
            </div>
          </List>
          <Outlet />
        </div>
      </div>
      <footer className='footer'>
          <div className='social-media-logos'>
            {darkMode ?
              (<div><AiFillFacebook className='icon'/><AiFillInstagram className='icon'/><AiFillTwitterCircle className='icon'/><AiFillYoutube className='icon'/></div>)
              :
              (<div><AiOutlineFacebook className='icon'/><AiOutlineInstagram className='icon'/><AiOutlineTwitter className='icon'/><AiOutlineYoutube className='icon'/></div>)
            }
        </div>
      </footer>
    </div >
  );
};

export default Layout;