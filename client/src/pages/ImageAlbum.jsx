import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// Components
import { planetsCollection } from '../constants/PlanetsImages';

const ImageAlbum = () => {
  const [isFlip, setIsFlip] = useState(() => JSON.parse(localStorage.getItem('planetsCards')) ?? (new Array(planetsCollection.length).fill(false)));
  console.log(isFlip);

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
      <h3>Image Album <span className='under-construction'> (* under-construction 🚧)</span></h3>
      <p className='first-line paragraph'>Here you can take a look at different image collections presented in the form of cards.</p>
      <p className='last-line paragraph'>You can flip the card between the front and back sides, altering the view to an image and related information, respectively.</p>
      <ImageList className='image-album' variant='masonry' cols={4} gap={32}>
        {planetsCollection.map((image, index) => (
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

export default ImageAlbum;


