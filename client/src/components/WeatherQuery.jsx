import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../graphql/WeatherQueries';
import { Button, capitalize, TextField } from '@mui/material';

// Components
import Peep1 from '../assets/collections/open-peeps/1.png';

const WeatherQuery = () => {
  const [citySearched, setCitySearched] = useState('');

  // Function for the query using Apollo Client
  const [getWeather, { loading, data, error }] = useLazyQuery(
    GET_WEATHER_QUERY,
    {
      variables: { name: citySearched },
    }
  );

  if (error) {
    return <p>Error found</p>;
  }

  if (data) {
    console.log(data);
  }

  // Funtion for conversion from API default
  const convertTemp = (temp) => {
    return (temp - 273.15).toFixed(1); // Kelvin to Celsius
  };

  // Function to get flag emoji
  const getFlagEmoji = (countryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='side-by-side-weather'>
      <div className='weather'>
        <TextField
          className='city-search'
          onChange={(event) => {
            setCitySearched(event.target.value);
          }}
          type='text'
          variant='outlined'
          placeholder='City name...'
        />
        <Button
          className='search-button'
          onClick={() => getWeather()}
          variant='contained'
        >
          Search
        </Button>
      </div>
      <div className='weather-results'>
        <div>
          <img
            className='activity-img-vert'
            src={Peep1}
            alt='person checking the phone'
            style={{width: 180, height: 280, marginTop: 32, marginRight: 48 }}
          />
        </div>
        <div className='weather-info last-line paragraph'>
          {loading && <p>Loading...</p>}
          {error && <p>Oops! An error has occurred. Try entering a new City.</p>}
          {data && data.getCityByName !== null && (
            <>
              <p className='weather-summary paragraph'>
                {capitalize(data.getCityByName.weather.summary.description)}
              </p>
              <p>City : {data.getCityByName.name}</p>
              <p>Country : {getFlagEmoji(data.getCityByName.country)}</p>
              <p>
                Current temperature :{' '}
                {convertTemp(data.getCityByName.weather.temperature.actual)}
                °C
              </p>
              <p>Humidity : {data.getCityByName.weather.clouds.humidity}%</p>
              <p>
                Wind Speed : {data.getCityByName.weather.wind.speed}
                m/s
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherQuery;
