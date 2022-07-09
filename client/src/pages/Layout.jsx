import React, { useContext, useEffect, useState } from 'react';
import { useStickyBox } from 'react-sticky-box';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import { DarkModeContext } from '../contexts/DarkModeContext';
// import LanguageSelector from '../components/LanguageSelector';
import ModeSwitch from '../components/ModeSwitch';
import reactLogoDark from '../assets/images/react-logo-dark.png';
import reactLogoLight from '../assets/images/react-logo-light.png';

import facebook from '../assets/collections/3D/facebook.png';
import instagram from '../assets/collections/3D/instagram.png';
import twitter from '../assets/collections/3D/twitter.png';
import youtube from '../assets/collections/3D/youtube.png';

const Layout = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  const [selectedIndex, setSelectedIndex] = useState(
    () => JSON.parse(localStorage.getItem('selectedIndex')) ?? null
  );

  const stickyRef = useStickyBox({
    offsetTop: 20,
    offsetBottom: 20,
    bottom: false,
  });

  const optionsSelect = [
    { id: 1, to: '/artdisplayer' },
    { id: 2, to: '/cardpayment' },
    { id: 3, to: '/chatbot' },
    { id: 4, to: '/customcounter' },
    { id: 5, to: '/dateselector' },
    { id: 6, to: '/emailhandler' },
    { id: 7, to: '/imagegallery' },
    { id: 8, to: '/languageselector' },
    { id: 9, to: '/listmanagement' },
    { id: 10, to: '/mapinteractor' },
    { id: 11, to: '/progressbar' },
    { id: 12, to: '/quizgame' },
    { id: 13, to: '/reportandanalytics' },
    { id: 14, to: '/searchfilter' },
    { id: 15, to: '/steppereditor' },
    { id: 16, to: '/timelinegraph' },
    { id: 17, to: '/userinfo' },
    { id: 18, to: '/weatherforecast' },
  ];

  // ------------------------------------------ Functions ---------------------------------------

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const previousListItemClick = (event) => {
    if (selectedIndex >= 1) {
      navigate(`${optionsSelect[selectedIndex - 1].to}`);
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const nextListItemClick = (event) => {
    if (selectedIndex <= 15) {
      navigate(`${optionsSelect[selectedIndex + 1].to}`);
      setSelectedIndex(selectedIndex + 1);
    }
  };

  useEffect(() => {
    localStorage.setItem('selectedIndex', JSON.stringify(selectedIndex));
  }, [selectedIndex]);

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <nav>
        <ModeSwitch />
      </nav>
      <div className='all-container'>
        <div className='content'>
          <List>
            <div className='sidebar' ref={stickyRef}>
              <Link className='link-logo' to={'/'}>
                <img
                  className='logo'
                  src={darkMode ? reactLogoDark : reactLogoLight}
                  alt='logo'
                />
              </Link>
              <div className='arrows'>
                <button
                  className={darkMode ? 'arrow-left-dark' : 'arrow-left-light'}
                  onClick={previousListItemClick}
                >
                  &lsaquo;
                </button>
                <button
                  className={
                    darkMode ? 'arrow-right-dark' : 'arrow-right-light'
                  }
                  onClick={nextListItemClick}
                >
                  &rsaquo;
                </button>
              </div>
              <div>
                <h2 className='react-lab'>Re@ct L@b</h2>
              </div>
              <NavLink to='/artdisplayer'>
                <ListItemButton
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
                >
                  <ListItemText
                    className='choice'
                    primary={`🎨 ${t('art_displayer')}`} />
                </ListItemButton>
              </NavLink>
              <NavLink to='/cardpayment'>
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemText className='choice' primary={`💳 ${t('card_payment')}`} />
                </ListItemButton>
              </NavLink>
              <NavLink to='/chatbot'>
                <ListItemButton
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemText
                    className='choice'
                    primary={`💬 ${t('chat_bot')}`} />
                </ListItemButton>
              </NavLink>
              <NavLink to='/customcounter'>
                <ListItemButton
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}
                >
                  <ListItemText
                    className='choice'
                    primary={`🧮 ${t('custom_counter')}`}
                  />
                </ListItemButton>
              </NavLink>
              <NavLink to='/dateselector'>
                <ListItemButton
                  selected={selectedIndex === 4}
                  onClick={(event) => handleListItemClick(event, 4)}
                >
                  <ListItemText
                    className='choice'
                    primary={`📅 ${t('date_selector')}`} />
                </ListItemButton>
              </NavLink>
              <NavLink to='/emailhandler'>
                <ListItemButton
                  selected={selectedIndex === 5}
                  onClick={(event) => handleListItemClick(event, 5)}
                >
                  <ListItemText
                    className='choice'
                    primary={`📧 ${t('email_handler')}`} />
                </ListItemButton>
              </NavLink>
              <NavLink to='/imagegallery'>
                <ListItemButton
                  selected={selectedIndex === 6}
                  onClick={(event) => handleListItemClick(event, 6)}
                >
                  <ListItemText
                    className='choice'
                    primary={`🖼️ ${t('image_gallery')}`} />
                </ListItemButton>
              </NavLink>
              <NavLink to='/languageselector'>
                <ListItemButton
                  selected={selectedIndex === 7}
                  onClick={(event) => handleListItemClick(event, 7)}
                >
                  <ListItemText
                    className='choice'
                    primary={`🌎 ${t('language_selector')}`}
                  />
                </ListItemButton>
              </NavLink>
              <NavLink to='/listmanagement'>
                <ListItemButton
                  selected={selectedIndex === 8}
                  onClick={(event) => handleListItemClick(event, 8)}
                >
                  <ListItemText
                    className='choice'
                    primary={`📝 ${t('list_management')}`}
                  />
                </ListItemButton>
              </NavLink>
              <NavLink to='/mapinteractor'>
                <ListItemButton
                  selected={selectedIndex === 9}
                  onClick={(event) => handleListItemClick(event, 9)}
                >
                  <ListItemText
                    className='choice'
                    primary={`🗺️ ${t('map_interactor')}`}
                  />
                </ListItemButton>
              </NavLink>
              <NavLink to='/reportandanalytics'>
                <ListItemButton
                  selected={selectedIndex === 10}
                  onClick={(event) => handleListItemClick(event, 10)}
                >
                  <ListItemText
                    className='choice'
                    primary={`📊 ${t('report_analytics')}`}
                  />
                </ListItemButton>
              </NavLink>
              <NavLink to='/searchfilter'>
                <ListItemButton
                  selected={selectedIndex === 11}
                  onClick={(event) => handleListItemClick(event, 11)}
                >
                  <ListItemText
                    className='choice'
                    primary={`🔍 ${t('search_filter')}`}
                  />
                </ListItemButton>
              </NavLink>
              <NavLink to='/progressbar'>
                <ListItemButton
                  selected={selectedIndex === 12}
                  onClick={(event) => handleListItemClick(event, 12)}
                >
                  <ListItemText
                    className='choice'
                    primary={`⌛ ${t('pogress_bar')}`} />
                </ListItemButton>
              </NavLink>

              <NavLink to='/quizgame'>
                <ListItemButton
                  selected={selectedIndex === 13}
                  onClick={(event) => handleListItemClick(event, 13)}
                >
                  <ListItemText
                    className='choice'
                    primary={`✅ ${t('quiz_game')}`}
                  />
                </ListItemButton>
              </NavLink>

              <NavLink to='/steppereditor'>
                <ListItemButton
                  selected={selectedIndex === 14}
                  onClick={(event) => handleListItemClick(event, 14)}
                >
                  <ListItemText
                    className='choice'
                    primary={`🦶 ${t('stepper_editor')}`} />
                </ListItemButton>
              </NavLink>
              <NavLink to='/timelinegraph'>
                <ListItemButton
                  selected={selectedIndex === 15}
                  onClick={(event) => handleListItemClick(event, 15)}
                >
                  <ListItemText
                    className='choice'
                    primary={`🕒 ${t('timeline_graph')}`}
                  />
                </ListItemButton>
              </NavLink>
              <NavLink to='/userinfo'>
                <ListItemButton
                  selected={selectedIndex === 16}
                  onClick={(event) => handleListItemClick(event, 16)}
                >
                  <ListItemText
                    className='choice'
                    primary={`👤 ${t('user_info')}`} />
                </ListItemButton>
              </NavLink>
              <NavLink to='/weatherforecast'>
                <ListItemButton
                  selected={selectedIndex === 17}
                  onClick={(event) => handleListItemClick(event, 17)}
                >
                  <ListItemText
                    className='choice'
                    primary={`🌤️ ${t('weather_forecast')}`}
                  />
                </ListItemButton>
              </NavLink>
            </div>
          </List>
          <Outlet />
        </div>
      </div>
      <footer className='footer'>
        <div className='author'>
          <p>With 💙 by <i>acnevesgit</i></p>
        </div>
        <div className='social-media-logos'>
          <img
            className='media-icon'
            src={facebook}
            alt='facebook-logo'
          />
          <img
            className='media-icon'
            src={instagram}
            alt='instagram-logo'
          />
          <img
            className='media-icon'
            src={twitter}
            alt='twitter-logo'
          />
          <img
            className='media-icon'
            src={youtube}
            alt='youtube-logo'
          />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
