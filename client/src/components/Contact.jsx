import React from 'react';
import { Button } from '@mui/material';

export const Contact = ({ contactData, deleteContact }) => {
  // const randomSeed = Math.random().toString(36).substring(2, 7);

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='contact-container'>
      <div>
        <img src={contactData.avatar ?? `https://avatars.dicebear.com/api/open-peeps/:${contactData.name}.svg`} alt={contactData.name} />
        <div className='contact-details'>
          <p><b>{contactData.name}</b></p>
          <p>{contactData.phone}</p>
        </div>
      </div>
      <Button onClick={() => deleteContact(contactData.id)} className='contact-delete' variant='contained'>
        Delete
      </Button>
    </div>
  );
};

export default Contact;