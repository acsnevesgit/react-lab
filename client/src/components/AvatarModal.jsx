import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// Components
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, avatar13, avatar14, avatar15, avatar16, avatar17, avatar18, avatar19, avatar20, avatar21, avatar22, avatar23, avatar24, avatar25, avatar26 } from '../assets/avatars/index';

const avatarsRow1 = [
  { id: 1, img: avatar1 },
  { id: 2, img: avatar2 },
  { id: 3, img: avatar3 },
  { id: 4, img: avatar4 },
  { id: 5, img: avatar5 },
  { id: 6, img: avatar6 },
  { id: 7, img: avatar7 },
  { id: 8, img: avatar8 },
  { id: 9, img: avatar9 },
  { id: 10, img: avatar10 },
  { id: 11, img: avatar11 },
  { id: 12, img: avatar12 },
  { id: 13, img: avatar13 }
];

const avatarsRow2 = [
  { id: 14, img: avatar14 },
  { id: 15, img: avatar15 },
  { id: 16, img: avatar16 },
  { id: 17, img: avatar17 },
  { id: 18, img: avatar18 },
  { id: 19, img: avatar19 },
  { id: 20, img: avatar20 },
  { id: 21, img: avatar21 },
  { id: 22, img: avatar22 },
  { id: 23, img: avatar23 },
  { id: 24, img: avatar24 },
  { id: 25, img: avatar25 },
  { id: 26, img: avatar26 }
];

const AvatarModal = () => {
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState(
    () => JSON.parse(localStorage.getItem('currentAvatar')) ?? `${avatarsRow1[0]}`);
  const selectedMode = JSON.parse(localStorage.getItem('darkMode'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getAvatar = async (event) => {
    const selectedAvatar = localStorage.setItem('currentAvatar', JSON.stringify(event.target.alt));
    setAvatar(selectedAvatar);
    handleClose();
    reloadPage();
  };

  const reloadPage = () => {
    window.location.reload();
  };

  // ----- Render -----

  return (
    <div>
      <Button onClick={handleOpen}><Avatar className='avatar' src={`${avatar}`} alt='avatar' sx={{ width: 60, height: 60 }} /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={selectedMode ? 'dark-basic-modal' : 'light-basic-modal'}>
          <h3>Choose an avatar</h3>
          <div className='avatar-pics'>
            <div className='row1'>
              {avatarsRow1.map((pic) => (
                <Avatar className='avatar-pic' key={pic.id} src={`${pic.img}`} alt={`${pic.img}`} onClick={getAvatar} sx={{ width: 60, height: 60 }} />
              ))}
            </div>
            <div className='row2'>
              {avatarsRow2.map((pic) => (
                <Avatar className='avatar-pic' key={pic.id} src={`${pic.img}`} alt={`${pic.img}`} onClick={getAvatar} sx={{ width: 60, height: 60 }} />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AvatarModal;