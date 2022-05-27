import React from 'react';
import { Outlet } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className='main'>
      <h3>Home</h3>
      <Outlet />
    </div>
  )
};

export default Homepage;