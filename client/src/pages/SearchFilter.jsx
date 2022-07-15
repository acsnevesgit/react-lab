import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import { PageTransition } from '../components/PageTransitions';
import MovieSelector from '../components/MovieSelector';

const SearchFilter = () => {
  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <PageTransition>
        <h3>
          Search and Filter
          <span className='under-construction'> (* under-construction 🚧)</span>
        </h3>
        <p className='first-line paragraph'>
          Here you can navigate through a movie database (of partially made-up
          data) with the help of{' '}
          <i>
            <b>react-select</b>
          </i>{' '}
          package.
        </p>
        <p className='last-line paragraph'>
          You can search by typing keywords, by selecting multiple options from
          the selection dropdowns or by sorting the table columns by
          ascending/descending order, by clicking on the respective header.
        </p>
        <MovieSelector />
        <Outlet />
      </PageTransition>
    </div>
  );
};

export default SearchFilter;
