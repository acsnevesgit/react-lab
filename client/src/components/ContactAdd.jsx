import React, { useState } from 'react';
import { MdPersonAddAlt1, MdAddCircle, MdRemoveCircle } from 'react-icons/md';

// Components
import { Contact } from './Contact';

export const ContactAdd = ({ addContact }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const toggleForm = () => {
    setIsShowing(!isShowing);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addContact({
      id: crypto.randomUUID(),
      name: name,
      phone: phone,
      avatar: !avatar ? null : avatar
    });
    setAvatar('');
    setName('');
    setPhone('');
  }

  const onChangeAvatar = (event) => {
    setAvatar(event.target.value.trim(''));
  }

  const onChangeName = (event) => {
    setName(event.target.value);
  }

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  // ------------------------------------------ Render ------------------------------------------ (Presentational Component == no logic)

  return (
    <div className='add-contact-container'>
      <header className='add-contact-header'>
        <button onClick={toggleForm} className={isShowing ? 'circle' : ''} style={isShowing ? { background: '#fe6161' } : {}}>
          {isShowing ? (
            <MdRemoveCircle size={20} />
          ) : (
            <>
              <MdPersonAddAlt1 size={20} />
              Add contact
            </>
          )}
        </button>
      </header>
      {isShowing && (
        <form onSubmit={onSubmit} className='contact-form'>
          <input className='contact-input' type='text' placeholder='Picture URL' onChange={onChangeAvatar} value={avatar} />
          <input className='contact-input' type='text' placeholder='Name *' required onChange={onChangeName} value={name} />
          <input className='contact-input' type='text' placeholder='Phone number *' required onChange={onChangePhone} value={phone} />
          <button className='contact-circle'><MdAddCircle size={20} /></button>
        </form>
      )}
    </div>
  );
};

export default ContactAdd;