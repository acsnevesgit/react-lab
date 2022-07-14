import React, { useContext, useState } from 'react';
import Cleave from 'cleave.js/react';
import { Button, TextField } from '@mui/material';
import Select from 'react-select';

// Components
import { optionsMonth, optionsYear } from '../constants/DateOptions';
import { DarkModeContext } from '../contexts/DarkModeContext';

import amex from '../assets/svg/amex.svg';
import maestro from '../assets/svg/maestro.svg';
import mastercard from '../assets/svg/mastercard.svg';
import visa from '../assets/svg/visa.svg';

import Peep3 from '../assets/collections/open-peeps/3.png';

const paymentCards = [amex, maestro, mastercard, visa];

const imageUrls = [
  'https://images.unsplash.com/photo-1524168948265-8f79ad8d4e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1632008821948-5b25af4ff577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
];

const Payment = () => {
  const [creditCardNum, setCreditCardNum] = useState('#### #### #### ####');
  const [cardType, setCardType] = useState('');
  const [cardHolder, setCardHolder] = useState('Full Name');
  const [expireMonth, setExpireMonth] = useState('MM');
  const [expireYear, setExpireYear] = useState('YY');
  const [cardTypeUrl, setCardTypeUrl] = useState(
    'https://images.unsplash.com/photo-1524168948265-8f79ad8d4e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  );

  const { darkMode } = useContext(DarkModeContext);

  // ------------------------------------------ Functions ---------------------------------------

  const handleNumber = (event) => {
    setCreditCardNum(event.target.rawValue);
  };

  const handleType = (type) => {
    setCardType(type);
    console.log(type);

    if (type === 'amex') {
      setCardTypeUrl(imageUrls[0]);
    } else if (type === 'maestro') {
      setCardTypeUrl(imageUrls[1]);
    } else if (type === 'mastercard') {
      setCardTypeUrl(imageUrls[2]);
    } else if (type === 'visa') {
      setCardTypeUrl(imageUrls[3]);
    }
  };

  const handleCardHolder = (event) => {
    setCardHolder(event.target.value);
  };

  const handleExpMonth = (event) => {
    setExpireMonth(event.label);
  };

  const handleExpYear = (event) => {
    setExpireYear(event.label);
  };

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='payment'>
      <div className='card-type'>
        {paymentCards.map((card) => {
          return (
            <img
              key={card.index}
              className='card-type-logo'
              src={card}
              alt='card logos'
            />
          );
        })}
      </div>
      <div className='side-by-side'>
        <div className='card-form'>
          <form id={darkMode ? 'card-form-dark' : 'card-form-light'}>
            <div id={darkMode ? 'payment-card-dark' : 'payment-card-light'}>
              <div className='sticker'></div>
              <div className={darkMode ? 'card-body-dark' : 'card-body-light'}>
                <h2 id='creditCardNumber'>{creditCardNum}</h2>
              </div>
              <div className='card-footer'>
                <div>
                  <h5>Card Holder</h5>
                  <h3>{cardHolder}</h3>
                </div>
                <div>
                  <h5>Expires</h5>
                  <h4>
                    {expireMonth} / {expireYear}
                  </h4>
                </div>
              </div>
            </div>
            <div className='payment-container'>
              <p className='title-input'>Card Number</p>
              <Cleave
                className='card-number'
                delimiter='-'
                options={{
                  creditCard: true,
                  onCreditCardTypeChanged: handleType,
                }}
                onChange={handleNumber}
                placeholder='Please enter your card number'
              />
            </div>
            <div>
              <p className='title-input'>Card Holder</p>
              <TextField
                className='card-holder'
                onChange={handleCardHolder}
                type='text'
                variant='outlined'
                placeholder='Please enter your full name'
                required
              />
            </div>
            <div className='input-group'>
              <div className=''>
                <p className='title-input'>Exp. Month</p>
                <Select
                  className='exp-month'
                  value={expireMonth}
                  onChange={handleExpMonth}
                  placeholder='Select...'
                  options={optionsMonth}
                ></Select>
              </div>
              <div className='input-container'>
                <p className='title-input'>Exp. Year</p>
                <Select
                  className='exp-year'
                  value={expireYear}
                  onChange={handleExpYear}
                  placeholder='Select...'
                  options={optionsYear}
                ></Select>
              </div>
              <div className='input-container'>
                <p className='title-input'>CVV</p>
                <TextField
                  className='cvv-number'
                  type='password'
                  placeholder='CVV'
                  required
                />
              </div>
            </div>
            <Button className='submit-button' variant='contained'>
              Submit 🚧
            </Button>
          </form>
        </div>
        <div>
          <img
            className='activity-img-vert'
            src={Peep3}
            alt='person holding laptop'
            style={{ width: 250, height: 280, marginTop: 220 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
