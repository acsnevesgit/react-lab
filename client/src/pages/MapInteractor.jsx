import React from 'react';

import { PageTransition } from '../components/PageTransitions';

const MapInteractor = () => {

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <PageTransition>
        <h3>Map Interactor</h3>
        <p className='first-line paragraph'>🚧</p>
        <div id='map'></div>
      </PageTransition>
    </div>
  );
};

export default MapInteractor;