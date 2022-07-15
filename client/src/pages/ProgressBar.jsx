import React from 'react';

import { PageTransition } from '../components/PageTransitions';

const ProgressBar = () => {
  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <PageTransition>
        <h3>Progress Bar</h3>
        <p className='first-line paragraph'>🚧</p>
      </PageTransition>
    </div>
  );
};

export default ProgressBar;
