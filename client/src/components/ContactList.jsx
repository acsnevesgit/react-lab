import React from 'react';

// Components
import { Contact } from './Contact';

const ContactList = ({ contacts, search, deleteContact }) => {

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='contact-list-container'>
      {contacts.map((contact) => {
        return (
          <Contact key={contact.id} contactData={contact} deleteContact={deleteContact} />
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
                <p>Your list is empty. Go ahead and start adding new contacts.</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;