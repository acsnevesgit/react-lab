import React, { useState } from 'react';
import Select from 'react-select';
import TextField from '@mui/material/TextField';

import mockData from "../databases/MockMovies.json";

// Components
import TableSorter from './TableSorter';
import { optionsGenre, optionsCountry, optionsYear } from "../constants/MovieOptions";

const MovieSelector = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const [movieData, setMovieData] = useState(mockData);

  // ----- Setters and getters -----
  //TODO : search function and filter functions

  // ----- Render -----

  return (
    <div>
      <div className="">
        <TextField className="movie-search" label="Search Keyword 🚧" variant="filled" />
      </div>
      <div className="movie-container">
        <div className="movie-choice">
          <Select
            className='movie-genre'
            closeMenuOnSelect={false}
            isClearable
            defaultValue={selectedGenre}
            onChange={setSelectedGenre}
            placeholder='Select Genre... 🚧'
            options={optionsGenre}
            isMulti
          />
        </div>
        <div className="movie-choice">
          <Select
            className='movie-country'
            isClearable
            defaultValue={selectedCountry}
            onChange={setSelectedCountry}
            placeholder='Select Country... 🚧'
            options={optionsCountry}
          />
        </div>
        <div className="movie-choice">
          <Select
            className='movie-year'
            isClearable
            defaultValue={selectedYear}
            onChange={setSelectedYear}
            placeholder='Select Year... 🚧'
            options={optionsYear}
          />
        </div>
      </div>
      <div>
        <TableSorter movies={movieData} />
      </div>
    </div>
  );
};

export default MovieSelector;