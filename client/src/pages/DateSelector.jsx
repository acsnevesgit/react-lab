import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DarkModeContext } from '../contexts/DarkModeContext';

// Components
import timemanagement from '../assets/collections/3D/timemanagement.png';

const DateSelector = () => {
  const [startDate, setStartDate] = useState(new Date());

  const { darkMode } = useContext(DarkModeContext);

  // ------------------------------------------ Functions ---------------------------------------

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return (
      currentDate.getTime() < selectedDate.getTime() ||
      selectedDate.getTime() < 7
    );
  };

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <h3>
        Date Selector{' '}
        <span className='under-construction'> (* under-construction 🚧)</span>
      </h3>
      <p className='first-line paragraph'>
        Here you can choose different dates by picking day, month and year from
        the calendar below. You can as well select a specify time of the day,
        which is displayed at 30-minute intervals, and see what time slots are
        available/unavailable.
      </p>
      <p className='last-line paragraph'>
        This was created with the help of{' '}
        <i>
          <b>react-datepicker</b>
        </i>{' '}
        and{' '}
        <i>
          <b> date-fns</b>
        </i>{' '}
        packages.
      </p>
      <div className='side-by-side'>
        <div className='calendar-days'>
          <DatePicker
            className={darkMode ? 'date-picker-dark' : 'date-picker-light'}
            inline
            timeInputLabel='Time:'
            showTimeSelect
            selected={startDate}
            filterTime={filterPassedTime}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <div>
          <img
            className='activity-img-vert'
            src={timemanagement}
            alt='time scheduling'
          />
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
