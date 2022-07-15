import React, { useState } from 'react';
import Select from 'react-select';

import { PageTransition } from '../components/PageTransitions';

const LanguageSelector = () => {

  // Contains the value and text for the options
  const optionsLanguages = [
    { value: 'en', label: 'English' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'sv', label: 'Swedish' },
    { value: 'uk', label: 'Ukrainian' }
  ];

  const [chosenLanguage, setChosenLanguage] = useState(() => JSON.parse(localStorage.getItem('currentLanguage')) ?? 'en');

  // ------------------------------------------ Functions ---------------------------------------

  // Function that puts query to change the language
  const handleLanguageChange = (event) => {
    localStorage.setItem('currentLanguage', JSON.stringify(event.value));
    setChosenLanguage(event.value);
    const localHost = 'http://localhost:3000/';
    const currentLocation = 'languageselector'
    window.location.replace(localHost + currentLocation + '?lng=' + event.value);
  };

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <PageTransition>
        <h3>Language Selector</h3>
        <p className='first-line paragraph'>
          Here you can choose which language you want the content to be displayed in.
          Note that the translation only happens for the side bar at this point, since the goal is to show how it works.</p>
        <p className='last-line paragraph'> This feature was build with the help of <i><b>i18next</b></i> and <i><b>i18nexus</b></i> packages, where the latter provides an awesome API for scalable and automatic translation management.</p>
        <div className='language-choice'>
          <Select
            className='language-select'
            value={chosenLanguage}
            placeholder='Select language...'
            onChange={handleLanguageChange}
            options={optionsLanguages}
          />
        </div>
      </PageTransition>
    </div>
  );
};

export default LanguageSelector;
