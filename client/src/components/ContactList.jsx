import React, { useEffect, useState } from 'react';

// Components
import { Contact } from './Contact';

const ContactList = ({ contacts, search, deleteContact }) => {

  // ------------------------------------------ Render ------------------------------------------ (Presentational Component == no logic)

  return (
    <div className='contact-list-container'>
      {contacts.map((item) => {
        return (
          <Contact key={item.id} contactData={item} deleteContact={deleteContact} />
        )
      })}
      {contacts.length <= 0 && (
        <div className='empty-contact-list'>😔
          <div>
            {search ? (
              <>
                <p>Sorry, no contacts were found. Try another search word or add a new contact.</p>
              </>
            ) : (
              <>
                <p>Your list is empty. Go ahead and starting adding new contacts.</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;