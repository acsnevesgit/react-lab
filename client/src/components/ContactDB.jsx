import React from 'react';
// import PeopleData from '../databases/MockPeople.json';

export const ContactDB = ({ contact }) => {
  // ------------------------------------------ Render ------------------------------------------ (Presentational Component == no logic)

  return (
    <div className='contact-card'>
      <img src={contact.avatar} alt='avatar' />
      <div className='contact-content'>
        <p>First name: {contact.first_name}</p>
        <p>Last name: {contact.last_name}</p>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
        <p>Job: {contact.job}</p>
        <p>Department: {contact.department}</p>
        <p>City: {contact.city}</p>
        <p>Country: {contact.country}</p>
      </div>
    </div>
  );
};

export default ContactDB;
