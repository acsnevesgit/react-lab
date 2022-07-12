import React, { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';

import { DarkModeContext } from '../contexts/DarkModeContext';

const ContactAdd = ({ addContact }) => {
  const [isShowing, setIsShowing] = useState(false);

  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const { darkMode } = useContext(DarkModeContext);

  const toggleForm = () => {
    setIsShowing(!isShowing);
  };

  const handleInput = (event) => {
    event.preventDefault();
    addContact({
      id: crypto.randomUUID(),
      avatar: !avatar ? null : avatar,
      name: name,
      phone: phone,
      email: email,

    });
    setAvatar('');
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
  }

  const onChangeAvatar = (event) => {
    setAvatar(event.target.value.trim(''));
  }

  const onChangeName = (event) => {
    setName(event.target.value);
  }

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  // TODO: add validation of input fields

  // ------------------------------------------ Render ------------------------------------------ (Presentational Component == no logic)

  return (
    <div className='add-contact-container'>
      <Button onClick={toggleForm} className={isShowing ? 'back-arrow' : ''} variant='contained'>
        {isShowing ? (
          <>
            Back
          </>
        ) : (
          <>
            Add new contact
          </>
        )}
      </Button>
      {isShowing && (
        <div className='contact-form' id={darkMode ? 'contact-form-dark' : 'contact-form-light'}>
          <div className='row-1'>
            <TextField
              className='contact-input'
              value={avatar}
              onChange={onChangeAvatar}
              type='text'
              variant='outlined'
              placeholder='Picture URL'
              disabled // TODO
            />
            <TextField
              className='contact-input'
              value={name}
              onChange={onChangeName}
              type='text'
              variant='outlined'
              placeholder='Name *'
              required
            />
            <TextField
              className='contact-input'
              value={phone}
              onChange={onChangePhone}
              type='tel'
              variant='outlined'
              placeholder='Phone number *'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              minLength='10'
              maxLength='16'
              required
            />
          </div>
          <div className='row-2'>
            <TextField
              className='contact-input'
              value={email}
              onChange={onChangeEmail}
              type='email'
              variant='outlined'
              placeholder='Email'
            />
            <TextField
              className='contact-input'
              value={address}
              onChange={onChangeAddress}
              type='text'
              variant='outlined'
              placeholder='Address'
            />
          </div>
          <Button onClick={handleInput} className='contact-add' variant='contained'>Add</Button>
        </div>
      )
      }
    </div >
  );
};

export default ContactAdd;