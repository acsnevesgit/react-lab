import React, { useContext, useState } from 'react';
import Cleave from 'cleave.js/react';
import Button from '@mui/material/Button';
import Select from 'react-select';
import TextField from '@mui/material/TextField';

// Components
import {
  optionsMonth,
  optionsYear
} from '../constants/DateOptions';

import { DarkModeContext } from '../contexts/DarkModeContext';

// Dark and light themes
import amex from '../assets/svg/amex.svg';
import maestro from '../assets/svg/maestro.svg';
import mastercard from '../assets/svg/mastercard.svg';
import visa from '../assets/svg/visa.svg';

import amexW from '../assets/svg/amex-white.svg';
import maestroW from '../assets/svg/maestro-white.svg';
import mastercardW from '../assets/svg/mastercard-white.svg';
import visaW from '../assets/svg/visa-white.svg';

import amexB from '../assets/svg/amex-black.svg';
import maestroB from '../assets/svg/maestro-black.svg';
import mastercardB from '../assets/svg/mastercard-black.svg';
import visaB from '../assets/svg/visa-black.svg';

const paymentCards = [amex, maestro, mastercard, visa];
const paymentCardsBlack = [amexB, maestroB, mastercardB, visaB];
const paymentCardsWhite = [amexW, maestroW, mastercardW, visaW];

const imageUrls = [
  "https://images.unsplash.com/photo-1524168948265-8f79ad8d4e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1632008821948-5b25af4ff577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
]

const Payment = () => {
  const [creditCardNum, setCreditCardNum] = useState('#### #### #### ####');
  const [cardType, setCardType] = useState('');
  const [cardHolder, setCardHolder] = useState('Full Name');
  const [expireMonth, setExpireMonth] = useState('MM');
  const [expireYear, setExpireYear] = useState('YY');
  const [cardTypeUrl, setCardTypeUrl] = useState('https://images.unsplash.com/photo-1524168948265-8f79ad8d4e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');

  const { darkMode } = useContext(DarkModeContext);

  // ------------------------ Setters and getters ------------------------

  const handleNumber = (event) => {
    setCreditCardNum(event.target.rawValue);
  }

  const handleType = (type) => {
    setCardType(type);
    console.log(type);

    if (type === "amex") {
      setCardTypeUrl(imageUrls[0]);
    } else if (type === "maestro") {
      setCardTypeUrl(imageUrls[1]);
    } else if (type === "mastercard") {
      setCardTypeUrl(imageUrls[2]);
    } else if (type === "visa") {
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

  // ----- Render -----

  return (
    <div className='payment'>
      <p>We support the following types of payment:</p>
      <div className='card-type'>
        {paymentCards.map(card => {
          return <img key={card.index} className='card-type-logo' src={card} alt='card logos' />
        })}
      </div>
      <div className="card-form">
        <form id={darkMode ? "card-form-dark" : "card-form-light"}>
          <div id="payment-card">
            <div className="sticker"></div>
            <div className="card-body">
              <h2 id="creditCardNumber">{creditCardNum}</h2>
            </div>
            <div className="card-footer">
              <div>
                <h5>Card Holder</h5>
                <h3>{cardHolder}</h3>
              </div>
              <div>
                <h5>Expires</h5>
                <h4>{expireMonth} / {expireYear}</h4>
              </div>
            </div>
          </div>
          <div className="payment-container">
            <h4 className="title-input">Card Number</h4>
            <Cleave
              className="card-number"
              delimiter="-"
              options={{
                creditCard: true,
                onCreditCardTypeChanged: handleType
              }}
              onChange={handleNumber}
              placeholder="Please enter your card number"
            />
          </div>
          <div>
            <h4 className="title-input">Card Holder</h4>
            <TextField className="card-holder" onChange={handleCardHolder} type="text" variant='outlined' placeholder="Please enter your full name" required />
          </div>
          <div className="input-group">
            <div className="">
              <h4 className="title-input">Exp. Month</h4>
              <Select
                className="exp-month"
                value={expireMonth}
                onChange={handleExpMonth}
                placeholder='Select...'
                options={optionsMonth}>
              </Select>
            </div>
            <div className="input-container">
              <h4 className="title-input">Exp. Year</h4>
              <Select
                className="exp-year"
                value={expireYear}
                onChange={handleExpYear}
                placeholder='Select...'
                options={optionsYear}>
              </Select>
            </div>
            <div className="input-container">
              <h4 className="title-input">CVV</h4>
              <TextField className='cvv-number' type="password" placeholder="CVV" required />
            </div>
          </div>
          <Button className='submit-button' variant='contained'>Submit 🚧</Button>
        </form>
      </div>
    </div>
  );
};

export default Payment;