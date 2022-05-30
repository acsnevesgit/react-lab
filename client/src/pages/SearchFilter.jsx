import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import MovieSelector from '../components/MovieSelector';

const SearchFilter = () => {
  console.log('movie page');

  // ----- Render -----

  return (
    <div className='main'>
      <h3>Search and Filter</h3>
      <MovieSelector />
      <Outlet />
    </div>
  )
};

export default SearchFilter;