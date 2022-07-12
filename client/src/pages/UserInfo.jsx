import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

// Components
import Contact from '../components/Contact';
import ContactAdd from '../components/ContactAdd';
import ContactList from '../components/ContactList'

const UserInfo = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');


  const setContactsAndSave = (newContacts) => {
    setContacts(newContacts);
    localStorage.setItem('contactList', JSON.stringify(newContacts));
  };

  const loadSavedContacts = () => {
    const contacts = localStorage.getItem('contactList');
    if (contacts) {
      setContacts(JSON.parse(contacts));
    }
  };

  useEffect(() => {
    loadSavedContacts();
  }, []);

  const addContact = (newContact) => {
    setContactsAndSave([
      ...contacts,
      newContact
    ]);
  };

  const deleteContact = (contactId) => {
    const newContacts = contacts.filter((item) => {
      return item.id !== contactId
    });
    setContactsAndSave(newContacts);
  };

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredContacts = contacts.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <h3>User Info</h3>
      <p className='first-line paragraph'>Here you can view and manage contacts on a list based on the status you choose.</p>
      <p className='last-line paragraph'>This is useful, for example, to target your audience - your contacts are more likely to open your email and engage with it when its content is relevant to them.</p>
      <div>
        <TextField className='search-contact' onChange={onChangeSearch} value={search} type='text' placeholder='Search contact...' />
        <ContactAdd addContact={addContact} />
        <ContactList contacts={filteredContacts} search={search} deleteContact={deleteContact} />
      </div>

    </div>
  );
};

export default UserInfo;
