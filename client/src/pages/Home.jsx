import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Components
import { DarkModeContext } from '../contexts/DarkModeContext';
import { PageTransitionHome } from '../components/PageTransitions';
import Typewriter from '../components/Typewriter';
import ModeSwitch from '../components/ModeSwitch';
import Peep1 from '../assets/images/1.png';
import Peep2 from '../assets/images/2.png';
import Peep3 from '../assets/images/3.png';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  const handleClick = (event) => {
    navigate('/artdisplayer');
  };

  // ------------------------------------------ Render ------------------------------------------
  return (
    <PageTransitionHome>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <nav>
          <ModeSwitch />
        </nav>
        <div className='home'>
          <img
            className='activity-img-vert'
            src={Peep1}
            alt='artist showing Art'
            style={{ width: 170, height: 460 }}
          />
          <img
            className='activity-img-vert'
            src={Peep2}
            alt='artist showing Art'
            style={{ width: 170, height: 460, marginLeft: -60, marginRight: 80 }}
          />
          <div className='welcome'>
            {/* <Typewriter content={'Hello...'} speed={100} /> */}
            <h1>{t('welcome')}</h1>
            <Button className='home-btn' onClick={handleClick} variant='contained' size='large'><span className='noselect'>Enter</span></Button>
            <p className='first-line paragraph'>( * Enter at your own risk ⚠️ )</p>
            <p>( ** Feel free to experiment 🧪 )</p>
          </div>
          <img
            className='activity-img-vert'
            src={Peep3}
            alt='artist showing Art'
            style={{ width: 170, height: 460, marginLeft: 80 }}
          />
        </div>
      </div>
    </PageTransitionHome>
  );
};

export default Home;
