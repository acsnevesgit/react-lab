import React, { useContext } from 'react';

import { DarkModeContext } from '../contexts/DarkModeContext';

// Components
import { PageTransition } from '../components/PageTransitions';
import Peep28 from '../assets/collections/open-peeps/28.png';

const ArtDisplayer = () => {
  const { darkMode } = useContext(DarkModeContext);

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <PageTransition>
        <h3>Art Displayer</h3>
        <p className='first-line paragraph'>Here you can see some of the collage-type creations by <i>acnevesgit</i>.</p>
        <p className='last-line paragraph'>You can hover over the split image and see the resulting effect.
          You can also toggle Light/Dark mode to switch between two different creations.</p>
        <div className='side-by-side'>
          <div className={darkMode ? 'sea sea-dark' : 'sea sea-light'} >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <img
              className='activity-img-vert'
              src={Peep28}
              alt='artist showing Art'
              style={{ width: 220, height: 430, marginTop: 260, marginLeft: 32 }}
            />
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default ArtDisplayer;


