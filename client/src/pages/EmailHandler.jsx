import React from 'react';
import { PageTransition } from '../components/PageTransitions';

const EmailHandler = () => {
  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <PageTransition>
        <h3>Email Handler</h3>
        <p className='first-line paragraph'>🚧</p>
      </PageTransition>
    </div>
  );
};

export default EmailHandler;
