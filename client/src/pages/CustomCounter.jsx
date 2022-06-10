import React from 'react';

// Components
import Counter from '../components/Counter';

const CustomCounter = () => {
  // ----- Render -----

  return (
    <div className='main'>
      <h3>
        Custom Counter{' '}
        <span className='under-construction'>(* under-construction 🚧)</span>
      </h3>
      <p className='first-line paragraph'>
        Here you can use a custom counter whose state is handled with the help
        of{' '}
        <i>
          <b>react-redux</b>
        </i>{' '}
        package.
      </p>
      <Counter />
    </div>
  );
};

export default CustomCounter;
