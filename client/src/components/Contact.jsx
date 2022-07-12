import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { MdDeleteForever } from 'react-icons/md';

// Components
import peopletalking from '../assets/collections/3D/peopletalking.png';

export const Contact = ({ contactData, deleteContact }) => {
  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='contact-container'>
      <div>
        <img src={contactData.avatar} alt={contactData.name} />
        <div className='contact-details'>
          <p>{contactData.name}</p>
          <p>{contactData.phone}</p>
        </div>
      </div>
      <Button onClick={() => deleteContact(contactData.id)} className='contact-delete' variant='contained'>
        {/* <MdDeleteForever size={20} /> */}
        Delete
      </Button>
    </div>
  );
};

export default Contact;