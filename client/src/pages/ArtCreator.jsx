import React, { useContext } from 'react';

// Components
import { DarkModeContext } from '../contexts/DarkModeContext';

const ArtCreator = () => {
  const { darkMode } = useContext(DarkModeContext);

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <h3>Art Creator <span className='under-construction'> (* under-construction 🚧)</span></h3>
      <p className='first-line paragraph'>Here you can see some of the collage-type creations by <i>acnevesgit</i>.</p>
      <p className='last-line paragraph'>You can hover over the different parts of the image and see the resulting effect.
      You can also toggle Light/Dark mode to switch between two creations. 🚧</p>
      <div className={darkMode ? 'sea sea-dark' : 'sea sea-light'} >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ArtCreator;


