import React, {useContext} from 'react';
import { Button } from '@mui/material';

import { DarkModeContext } from '../contexts/DarkModeContext';

export const Contact = ({ contactData, deleteContact }) => {
  const { darkMode } = useContext(DarkModeContext);

  // const randomSeed = Math.random().toString(36).substring(2, 7);

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='contact-container' id={darkMode ? 'contact-container-dark' : 'contact-container-light'}>
      <div>
        <img src={contactData.avatar ?? `https://avatars.dicebear.com/api/open-peeps/:${contactData.firstname}.svg`} alt={contactData.firstname} />
        <div className='contact-details name-details'>
          <p><b>{contactData.firstname}</b></p>
          <p><b>{contactData.lastname}</b></p>
        </div>
        <div className='contact-details'>
          <p>Phone number: {contactData.phone}</p>
          <p>Email: {contactData.email}</p>
          <p>Job/Department: {contactData.job ?? null}, {contactData.department ?? null}</p>
          <p>City/Country: {contactData.city}, {contactData.country}</p>
        </div>
      </div>
      <Button onClick={() => deleteContact(contactData.id)} className='contact-delete' variant='contained'>
        Delete
      </Button>
    </div>
  );
};

export default Contact;