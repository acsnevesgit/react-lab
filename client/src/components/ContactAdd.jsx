import React, { useContext, useRef, useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';

import { DarkModeContext } from '../contexts/DarkModeContext';

const ContactAdd = ({ contacts, addContact }) => {

  const timerRef = useRef(null);
  const { darkMode } = useContext(DarkModeContext);

  const [isShowing, setIsShowing] = useState(false);
  const [alert, setAlert] = useState(false);

  const [avatar, setAvatar] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const toggleForm = () => {
    setIsShowing(!isShowing);
  };

  const handleInput = (event) => {
    event.preventDefault();
    if (!firstname || !lastname || !phone || !email || !city || !country) {
      setAlert(true);
      timerRef.current = setTimeout(() => setAlert(false), 2000);
    } else {
      addContact({
        id: crypto.randomUUID(),
        avatar: !avatar ? null : avatar,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        job: !job ? null : job,
        department: !department ? null : department,
        city: city,
        country: country,
      });
      setAvatar('');
      setFirstName('');
      setLastname('');
      setPhone('');
      setEmail('');
      setJob('');
      setDepartment('');
      setCity('');
      setCountry('');
    }
  };

  const onChangeAvatar = (event) => {
    setAlert(false);
    setAvatar(event.target.value.trim(''));
  };

  const onChangeFirstName = (event) => {
    setAlert(false);
    setFirstName(event.target.value);
  };

  const onChangeLastName = (event) => {
    setAlert(false);
    setLastname(event.target.value);
  };

  const onChangePhone = (event) => {
    setAlert(false);
    setPhone(event.target.value);
  };

  const onChangeEmail = (event) => {
    setAlert(false);
    setEmail(event.target.value);
  };

  const onChangeJob = (event) => {
    setAlert(false);
    setJob(event.target.value);
  };

  const onChangeCity = (event) => {
    setAlert(false);
    setCity(event.target.value);
  };

  const onChangeDepartment = (event) => {
    setAlert(false);
    setDepartment(event.target.value);
  };

  const onChangeCountry = (event) => {
    setAlert(false);
    setCountry(event.target.value);
  };

  const deleteAllContacts = () => {
    localStorage.clear('contactsList');
    window.location.reload();
  };

  // TODO: add validation of input fields

  // ------------------------------------------ Render ------------------------------------------ (Presentational Component == no logic)

  return (
    <div className='add-contact-container'>
      <div className='buttons-row'>
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
        {contacts.length ? (
          <Button onClick={deleteAllContacts} className='contact-delete contact-add' variant='contained'>Delete all contacts</Button>
        ) : (null)}
        {isShowing ? (<Button onClick={handleInput} className='contact-add' variant='contained'>Add</Button>) : (null)}
        {isShowing && alert ? (<Alert className='alert' severity='error'>Please insert the missing fields.</Alert>) : (null)}
      </div>
      {isShowing && (
        <div className='contact-form' id={darkMode ? 'contact-form-dark' : 'contact-form-light'}>
          <div className='input-rows'>
            <div className='row-1'>
              <TextField
                className='contact-input'
                value={avatar}
                onChange={onChangeAvatar}
                type='text'
                variant='outlined'
                placeholder='Picture URL 🚧'
                disabled // TODO
              />
              <TextField
                className='contact-input'
                value={firstname}
                onChange={onChangeFirstName}
                type='text'
                variant='outlined'
                placeholder='First name *'
                error={firstname === ''}
                required
              />
              <TextField
                className='contact-input'
                value={lastname}
                onChange={onChangeLastName}
                type='text'
                variant='outlined'
                placeholder='Last name *'
                error={lastname === ''}
                required
              />
            </div>
            <div className='row-2'>
              <TextField
                className='contact-input'
                value={phone}
                onChange={onChangePhone}
                type='tel'
                variant='outlined'
                placeholder='Phone number (10-16) *'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                error={phone === '' || phone.length < 10 || phone.length > 16}
                required
              />
              <TextField
                className='contact-input'
                value={email}
                onChange={onChangeEmail}
                type='email'
                variant='outlined'
                placeholder='Email *'
                error={email === ''}
                required
              />
              <TextField
                className='contact-input'
                value={job}
                onChange={onChangeJob}
                type='text'
                variant='outlined'
                placeholder='Job'
                required
              />
            </div>
            <div className='row-3'>
              <TextField
                className='contact-input'
                value={department}
                onChange={onChangeDepartment}
                type='text'
                variant='outlined'
                placeholder='Department'
                required
              />
              <TextField
                className='contact-input'
                value={city}
                onChange={onChangeCity}
                type='text'
                variant='outlined'
                error={city === ''}
                placeholder='City *'
                required
              />
              <TextField
                className='contact-input'
                value={country}
                onChange={onChangeCountry}
                type='text'
                variant='outlined'
                placeholder='Country *'
                error={country === ''}
                required
              />
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default ContactAdd;