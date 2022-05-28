import React, { useState } from 'react';
import Select from 'react-select';

//Components
import { optionsGenre, optionsCountry, optionsYear } from "../constants/MovieOptions";

const MovieSelector = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  // ----- Render -----

  return (
    <div className="movie-container border-up-down">
      <div className="movie-choice">
        <Select
          className='movieGenre'
          isClearable
          defaultValue={selectedGenre}
          onChange={setSelectedGenre}
          placeholder='Select Genre...'
          options={optionsGenre}
        />
      </div>
      <div className="movie-choice">
        <Select
          className='movieCountry'
          isClearable
          defaultValue={selectedCountry}
          onChange={setSelectedCountry}
          placeholder='Select Country...'
          options={optionsCountry}
        />
      </div>
      <div className="movie-choice">
        <Select
          className='movieYear'
          isClearable
          defaultValue={selectedYear}
          onChange={setSelectedYear}
          placeholder='Select Year...'
          options={optionsYear}
        />
      </div>
    </div>
  );
};

export default MovieSelector;