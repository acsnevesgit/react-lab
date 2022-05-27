import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import MovieSelector from '../components/MovieSelector';

const MovieSearch = () => {
console.log('movie page');

  // ----- Render -----

  return (
    <div className='main'>
      <h3>Movie Search</h3>
      <MovieSelector />
      <Outlet />
    </div>
  )
};

export default MovieSearch;