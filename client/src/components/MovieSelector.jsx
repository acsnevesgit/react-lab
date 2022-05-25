import React, { useState } from 'react';
import Select from 'react-select';

//Components
import { optionsGenre, optionsCountry } from "../constants/MovieOptions";

const MovieSelector = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div>
      <Select
        className='movieGenre'
        defaultValue={selectedGenre}
        onChange={setSelectedGenre}
        placeholder='Select Genre...'
        options={optionsGenre}
      />
      <Select
        className='movieCountry'
        defaultValue={selectedCountry}
        onChange={setSelectedCountry}
        placeholder='Select Country...'
        options={optionsCountry}
      />
    </div>
  );
};

export default MovieSelector;