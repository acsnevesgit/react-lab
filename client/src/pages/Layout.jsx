import React, { useEffect, useState } from 'react';
import { useStickyBox } from 'react-sticky-box';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {
  AiFillInstagram,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineFacebook,
  AiFillTwitterCircle,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineYoutube,
} from 'react-icons/ai';

// Components
import AvatarModal from '../components/AvatarModal';
import reactLogoDark from '../assets/images/react-logo-dark.png';
import reactLogoLight from '../assets/images/react-logo-light.png';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(getDefaultMode());
  const [selectedIndex, setSelectedIndex] = useState(
    () => JSON.parse(localStorage.getItem('selectedIndex')) ?? null
  );
  const navigate = useNavigate();

  const stickyRef = useStickyBox({
    offsetTop: 20,
    offsetBottom: 20,
    bottom: false,
  });

  const optionsSelect = [
    { id: 1, to: '/cardpayment' },
    { id: 2, to: '/chatbot' },
    { id: 3, to: '/customcounter' },
    { id: 4, to: '/datepicker' },
    { id: 5, to: '/emailhandler' },
    { id: 6, to: '/formvalidation' },
    { id: 7, to: '/imagelist' },
    { id: 8, to: '/languageselector' },
    { id: 9, to: '/listmanagement' },
    { id: 10, to: '/progressbar' },
    { id: 11, to: '/reportandanalytics' },
    { id: 12, to: '/searchfilter' },
    { id: 13, to: '/stepperedit' },
    { id: 14, to: '/timelinegraph' },
    { id: 15, to: '/userinfo' },
    { id: 16, to: '/weatherforecast' },
  ];

  // ------------------------ Setters and getters ------------------------

  function getDefaultMode() {
    const selectedMode = JSON.parse(localStorage.getItem('darkMode'));
    return selectedMode || false;
  }

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
    if (selectedIndex <= 14) {
      navigate(`${optionsSelect[selectedIndex + 1].to}`);
      setSelectedIndex(selectedIndex + 1);
    }
  };

  useEffect(() => {
    localStorage.setItem('selectedIndex', JSON.stringify(selectedIndex));
  }, [selectedIndex]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // ----- Render -----

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <nav>
        <div className='button-container'>
          <p>🌑</p>
          <Switch
            className='switch'
            onClick={() => setDarkMode((prevMode) => !prevMode)}
            defaultChecked={darkMode ? false : true}
            color='default'
          />
          <p>☀️</p>
          <AvatarModal />
        </div>
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
              <NavLink to='/cardpayment'>
                <ListItemButton
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
                >
                  <ListItemText className='choice' primary='💳 Card Payment' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/chatbot'>
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemText className='choice' primary='💬 Chat Bot' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/customcounter'>
                <ListItemButton
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemText
                    className='choice'
                    primary='🧮 Custom Counter'
                  />
                </ListItemButton>
              </NavLink>
              <NavLink to='/datepicker'>
                <ListItemButton
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}
                >
                  <ListItemText className='choice' primary='📅 Date Picker' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/emailhandler'>
                <ListItemButton
                  selected={selectedIndex === 4}
                  onClick={(event) => handleListItemClick(event, 4)}
                >
                  <ListItemText className='choice' primary='📧 Email Handler' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/formvalidation'>
                <ListItemButton
                  selected={selectedIndex === 5}
                  onClick={(event) => handleListItemClick(event, 5)}
                >
                  <ListItemText
                    className='choice'
                    primary='✍️ Form Validation'
                  />
                </ListItemButton>
              </NavLink>
              <NavLink to='/imagelist'>
                <ListItemButton
                  selected={selectedIndex === 6}
                  onClick={(event) => handleListItemClick(event, 6)}
                >
                  <ListItemText className='choice' primary='🖼️ Image List' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/languageselector'>
                <ListItemButton
                  selected={selectedIndex === 7}
                  onClick={(event) => handleListItemClick(event, 7)}
                >
                  <ListItemText
                    className='choice'
                    primary='🌎 Language Selector'
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
                    primary='📝 List Management'
                  />
                </ListItemButton>
              </NavLink>
              <NavLink to='/reportandanalytics'>
                <ListItemButton
                  selected={selectedIndex === 9}
                  onClick={(event) => handleListItemClick(event, 9)}
                >
                  <ListItemText
                    className='choice'
                    primary='📊 Report and Analytics'
                  />
                </ListItemButton>
              </NavLink>
              <NavLink to='/searchfilter'>
                <ListItemButton
                  selected={selectedIndex === 10}
                  onClick={(event) => handleListItemClick(event, 10)}
                >
                  <ListItemText
                    className='choice'
                    primary='🔍 Search and Filter'
                  />
                </ListItemButton>
              </NavLink>
              <NavLink to='/progressbar'>
                <ListItemButton
                  selected={selectedIndex === 11}
                  onClick={(event) => handleListItemClick(event, 11)}
                >
                  <ListItemText className='choice' primary='⌛ Progress Bar' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/stepperedit'>
                <ListItemButton
                  selected={selectedIndex === 12}
                  onClick={(event) => handleListItemClick(event, 12)}
                >
                  <ListItemText className='choice' primary='🦶 Stepper Edit' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/timelinegraph'>
                <ListItemButton
                  selected={selectedIndex === 13}
                  onClick={(event) => handleListItemClick(event, 13)}
                >
                  <ListItemText
                    className='choice'
                    primary='🕒 Timeline Graph'
                  />
                </ListItemButton>
              </NavLink>
              <NavLink to='/userinfo'>
                <ListItemButton
                  selected={selectedIndex === 14}
                  onClick={(event) => handleListItemClick(event, 14)}
                >
                  <ListItemText className='choice' primary='👤 User Info' />
                </ListItemButton>
              </NavLink>
              <NavLink to='/weatherforecast'>
                <ListItemButton
                  selected={selectedIndex === 15}
                  onClick={(event) => handleListItemClick(event, 15)}
                >
                  <ListItemText
                    className='choice'
                    primary='🌤️ Weather Forecast'
                  />
                </ListItemButton>
              </NavLink>
            </div>
          </List>
          <Outlet />
        </div>
      </div>
      <footer className='footer'>
        <div className='social-media-logos'>
          {darkMode ? (
            <div>
              <AiFillFacebook className='icon' />
              <AiFillInstagram className='icon' />
              <AiFillTwitterCircle className='icon' />
              <AiFillYoutube className='icon' />
            </div>
          ) : (
            <div>
              <AiOutlineFacebook className='icon' />
              <AiOutlineInstagram className='icon' />
              <AiOutlineTwitter className='icon' />
              <AiOutlineYoutube className='icon' />
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
