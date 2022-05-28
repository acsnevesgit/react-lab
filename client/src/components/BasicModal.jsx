import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// Components
import codecat from '../assets/avatars/codecat.png';
import constructorcat from '../assets/avatars/constructorcat.jpg';
import dodgecat from '../assets/avatars/dodgecat.png';
import dojocat from '../assets/avatars/dojocat.jpg';
import foundingfathercat from '../assets/avatars/foundingfathercat.jpg';
import jedicat from '../assets/avatars/jedicat.jpg';
import jenkcat from '../assets/avatars/jenkcat.jpg';
import kimonotocat from '../assets/avatars/kimonotocat.png';
import mariocat from '../assets/avatars/mariocat.jpg';
import muertocat from '../assets/avatars/muertocat.jpg';
import oktoberfestcat from '../assets/avatars/oktoberfestcat.png';
import rockcat from '../assets/avatars/rockcat.png';
import scarlettcat from '../assets/avatars/scarlettcat.jpg';
import steroidcat from '../assets/avatars/steroidcat.png';

const avatarPics = [
  {id:1, img: codecat},
  {id:2, img: constructorcat},
  {id:3, img: dodgecat},
  {id:4, img: dojocat},
  {id:5, img: foundingfathercat},
  {id:6, img: jedicat},
  {id:7, img: jenkcat},
  {id:8, img: kimonotocat},
  {id:9, img: mariocat},
  {id:10, img: muertocat},
  {id:11, img: oktoberfestcat},
  {id:12, img: rockcat},
  {id:13, img: scarlettcat},
  {id:14, img: steroidcat}
 ];

const BasicModal = () => {
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState(
    () => JSON.parse(localStorage.getItem('currentAvatar')) ?? `${avatarPics[0]}`);
  const selectedMode = JSON.parse(localStorage.getItem('darkMode'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getAvatar = async (event) => {
    const selectedAvatar = localStorage.setItem('currentAvatar', JSON.stringify(event.target.alt));
    console.log(`${selectedAvatar}`);
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
              {avatarPics.map((pic) => (
                <Avatar className='avatar-pic' key={pic.id} src={`${pic.img}`} alt={`${pic.img}`} onClick={getAvatar} sx={{ width: 60, height: 60 }} />
              ))}
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default BasicModal;