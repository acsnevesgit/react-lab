import React from 'react';

// Components
import { PageTransition } from '../components/PageTransitions';
import Payment from '../components/Payment';

const CardPayment = () => {
  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <PageTransition>
        <h3>Card Payment</h3>
        <p className='first-line paragraph'>
          Here you can choose a form of payment and input your information in
          order to make a purchase.
        </p>
        <p className='last-line paragraph'>
          We support the following types of payment:
        </p>
        <Payment />
      </PageTransition>
    </div>
  );
};

export default CardPayment;
