import React, { useState } from 'react';

import { PageTransition } from '../components/PageTransitions';
const steps = ['Contact Details', 'Shipping Information', 'Payment and Review'];

const StepperEditor = () => {
  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <PageTransition>
        <h3>Stepper Editor</h3>
        <p className='first-line paragraph'>🚧</p>
      </PageTransition>
    </div>
  );
};

export default StepperEditor;
