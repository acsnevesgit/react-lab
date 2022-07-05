import React, { useRef, useState } from 'react';

// Components
import constructor from '../assets/collections/3D/constructor.png';

const ChatBot = () => {
  // ------------------------------------------ Render ------------------------------------------
  return (
    <div className='main'>
      <h3>Chat Bot</h3>
      <p className='first-line paragraph'>🚧</p>
      <div>
          <img
            className='activity-img'
            src={constructor}
            alt='under construction'
          />
        </div>
    </div>
  );
};

export default ChatBot;
