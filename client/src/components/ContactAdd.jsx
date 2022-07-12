import React, { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';
import ImageUploading from 'react-images-uploading';
import { MdPersonAddAlt1, MdAddCircle, MdOutlineArrowBack } from 'react-icons/md';

// Components

import { DarkModeContext } from '../contexts/DarkModeContext';

const ContactAdd = ({ addContact }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onChange = (uploadedImage) => {
    console.log(uploadedImage[0]?.file?.name);
    setAvatar(uploadedImage[0]?.file?.name);
  };

  console.log(avatar);

  const { darkMode } = useContext(DarkModeContext);

  const toggleForm = () => {
    setIsShowing(!isShowing);
  };

  const handleInput = (event) => {
    event.preventDefault();
    const randomSeed = Math.random().toString(36).substring(2, 7);
    addContact({
      id: crypto.randomUUID(),
      name: name,
      phone: phone,
      avatar: !avatar ? `https://avatars.dicebear.com/api/open-peeps/:${randomSeed}.svg` : avatar
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

  // TODO: add validation of input fields

  // ------------------------------------------ Render ------------------------------------------ (Presentational Component == no logic)

  return (
    <div className='add-contact-container'>
      <Button onClick={toggleForm} className={isShowing ? 'circle' : ''} variant='contained' style={isShowing ? { background: '#8f8f8f' } : {}}>
        {isShowing ? (
          <MdOutlineArrowBack size={20} />
        ) : (
          <>
            {/* <MdPersonAddAlt1 size={20} className='add-contact-button' /> */}
            Add contact
          </>
        )}
      </Button>
      {isShowing && (
        <div className='contact-form' id={darkMode ? 'contact-form-dark' : 'contact-form-light'}>
          {/* <TextField
            className='contact-input'
            value={avatar}
            onChange={onChangeAvatar}
            type='file'
            variant='outlined'
            placeholder='Picture URL'
          /> */}
          <ImageUploading
            className='contact-input'
            multiple
            value={avatar}
            onChange={onChange}
            dataURLKey='data_url'
            acceptType={['png', 'jpg', 'svg']}
          >
            {({
              uploadedImage,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps
            }) => (
              // write your building UI
              <div className='upload__image-wrapper'>
                <Button
                  variant='contained'
                  style={isDragging ? { color: 'red' } : null}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Upload avatar
                </Button>
                &nbsp;
                <div className='image-item'>
                  <img src={uploadedImage} alt='' width='100' />
                  <div className='image-item__btn-wrapper'>
                    <Button variant='contained' onClick={() => onImageUpdate(0)}>Update</Button>
                    <Button variant='contained' onClick={() => onImageRemove(0)}>Remove</Button>
                  </div>
                </div>
              </div>
            )}
          </ImageUploading>
          <TextField
            className='contact-input'
            value={name}
            onChange={onChangeName}
            type='text'
            variant='outlined'
            placeholder='Name *'
            required
          />
          <TextField
            className='contact-input'
            value={phone}
            onChange={onChangePhone}
            type='tel'
            variant='outlined'
            placeholder='Phone number *'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            minLength='10'
            maxLength='16'
            required
          />
          <Button onClick={handleInput} className='contact-add' variant='contained'><MdAddCircle size={20} /></Button>
        </div>
      )
      }
    </div >
  );
};

export default ContactAdd;