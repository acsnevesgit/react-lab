import React, { useContext, useState, useEffect } from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

// Components
import { planetsCollection } from '../constants/PlanetsImages';
import { DarkModeContext } from '../contexts/DarkModeContext';

const ImageGallery = () => {
  const [isFlip, setIsFlip] = useState(() => JSON.parse(localStorage.getItem('planetsCards')) ?? (new Array(planetsCollection.length).fill(false)));

  const { darkMode } = useContext(DarkModeContext);

  // ------------------------------------------ Functions ---------------------------------------
  const handleFlip = async (event) => {
    const cardToFlip = event.target.id; //index of clicked card
    const newIsFlip = [...isFlip];

    newIsFlip[`${cardToFlip}`] = !isFlip[`${cardToFlip}`];
    setIsFlip(newIsFlip);
  };

  useEffect(() => {
    localStorage.setItem('planetsCards', JSON.stringify(isFlip));
  }, [isFlip]);

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <h3>Image Gallery <span className='under-construction'> (* under-construction 🚧)</span></h3>
      <p className='first-line paragraph'>Here you can take a look at an image collection presented in the form of cards.</p>
      <p className='last-line paragraph'>You can flip the card between the front and back sides, altering the view to an image and to the related information, respectively.
        You can can also choose among different visual effects. 🚧</p>
      <ImageList className='image-gallery' variant='masonry' cols={4} gap={48}>
        {planetsCollection?.map((image, index) => (
          <ImageListItem key={image.title} id="image-card">
            <img
              className={isFlip[index] ? 'planet-card planet-container card-back' : 'planet-card planet-container card-front'}
              src={isFlip[index] ? `${image.imgBack}` : `${image.imgFront}`}
              id={index}
              alt={image.title}
              loading='lazy'
              onClick={handleFlip} />
            {isFlip[index] ? (
              <ImageListItemBar
                title={`🪐 ${image.title}`}
              />
            ) : null}
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ImageGallery;


