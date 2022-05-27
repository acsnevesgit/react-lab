import React, { useState } from 'react';
import Select from 'react-select';

//Components
import { optionsGenre, optionsCountry } from "../constants/MovieOptions";

const MovieSelector = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  // ----- Render -----

  return (
    <div className="container">
      <Select
        className='movieGenre'
        isClearable
        defaultValue={selectedGenre}
        onChange={setSelectedGenre}
        placeholder='Select Genre...'
        options={optionsGenre}
      />
      <Select
        className='movieCountry'
        isClearable
        defaultValue={selectedCountry}
        onChange={setSelectedCountry}
        placeholder='Select Country...'
        options={optionsCountry}
      />
    </div>
  );
};

export default MovieSelector;