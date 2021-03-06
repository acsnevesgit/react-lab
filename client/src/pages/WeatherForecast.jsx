import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

// Components
import { PageTransition } from '../components/PageTransitions';
import WeatherQuery from '../components/WeatherQuery';

const WeatherForecast = () => {
  // Where to make the API calls
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://graphql-weather-api.herokuapp.com/',
  });

  // ------------------------------------------ Render ------------------------------------------

  return (
    <ApolloProvider client={client}>
      <div className='main'>
        <PageTransition>
          <h3>Weather Forecast</h3>
          <p className='first-line paragraph last-line paragraph'>
            Here you can search weather information by City with the help of{' '}
            <i>
              <b>GraphQL and Apollo Client</b>
            </i>{' '}
            package.
          </p>
          <WeatherQuery />
        </PageTransition>
      </div>
    </ApolloProvider >
  );
};

export default WeatherForecast;
