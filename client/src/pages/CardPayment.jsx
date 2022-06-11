import React from 'react';

// Components
import Payment from '../components/Payment';

const CardPayment = () => {
  // ----- Render -----

  return (
    <div className='main'>
      <h3>Card Payment</h3>
      <p className='first-line paragraph'>Here you can choose a form of payment and input your information in order to make a purchase</p>
      {/* <p className='last-line paragraph'>This component is built with the help of <i><b>Stripe</b></i> package.</p> */}
      <Payment />
    </div>
  );
};

export default CardPayment;
