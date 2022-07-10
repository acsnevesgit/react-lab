import React, { useEffect, useState } from 'react';
import ContactCard from '../components/ContactCard';
import mockData from '../databases/MockPeople.json';

// Components
import { AddContact } from '../components/AddContact'
import { Input } from '../components/Input';
import { List } from '../components/List'
import constructor from '../assets/collections/3D/constructor.png';

const UserInfo = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');

  const contactsData = mockData;

  const setContactsAndSave = (newContacts) => {
    setContacts(newContacts);
    localStorage.setItem('contacts:saved', JSON.stringify(newContacts));
  };

  const loadSavedContacts = () => {
    const saved = localStorage.getItem('contacts:saved');
    if (saved) {
      setContacts(JSON.parse(saved));
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
      <p className='first-line paragraph'>🚧</p>
      <div>
        {/* <AddContact addContact={addContact} />
        <Input onChange={onChangeSearch} value={search} placeholder='Buscar contato...' />
        <List contacts={filteredContacts} search={search} deleteContact={deleteContact} /> */}
      </div>

    </div>
  );
};

export default UserInfo;
