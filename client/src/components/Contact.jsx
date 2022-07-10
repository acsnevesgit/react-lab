import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

// Components
import peopletalking from '../assets/collections/3D/peopletalking.png';

export const Contact = (props) => {

  // ------------------------------------------ Render ------------------------------------------ (Presentational Component == no logic)

  return (
    <div className='contact-container'>
      <div>
        <img src={props.contactData.avatar ?? peopletalking} alt={props.contactData.name} />
        <div className='contact-details'>
          <strong>{props.contactData.name}</strong>
          <span>{props.contactData.phone}</span>
        </div>
      </div>
      <button onClick={() => props.deleteContact(props.contactData.id)} className='contact-delete'>
        <MdDeleteForever size={20} />
      </button>
    </div>
  );
};

export default Contact;