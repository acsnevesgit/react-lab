import React from 'react';

// Components
import Counter from '../components/Counter';
import Calculator from '../components/Calculator';

const CustomCounter = () => {
  // ------------------------------------------ Render ------------------------------------------

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
      <p className=' first-line paragraph'>
        And here is a Calculator inspired in <b><a href='https://www.sitepoint.com/react-tutorial-build-calculator-app/'>this</a></b> (very well explained!) tutorial, which supports the following features:
      </p>
      <ul className='calculator-list'>
        <li>add, subtract, multiply, divide;</li>
        <li>support decimal values;</li>
        <li>calculate percentages;</li>
        <li>invert values;</li>
        <li>reset functionality;</li>
        <li>format larger numbers;</li>
        <li>output resize based on length.</li>
      </ul>
      <Calculator />
    </div>
  );
};

export default CustomCounter;
