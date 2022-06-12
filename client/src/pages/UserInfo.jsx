import React, { useContext, useEffect, useReducer } from 'react';
import { AuthContext } from '../App';
import ContactCard from '../components/ContactCard';
import mockData from '../databases/MockPeople.json';

const initialState = {
  contacts: [], // If using API
  isFetching: false,
  hasError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        isFetching: false,
        contacts: action.payload,
      };
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        hasError: true,
        isFetching: false,
      };
    default:
      return state;
  }
};

const UserInfo = () => {
  const contacts = mockData;
  const { state: authState } = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  // TODO:
  // Handle network calls and dispatch necessary ACTION based on server response
  useEffect(() => {
    dispatch({
      type: 'FETCH_DATA_REQUEST',
    });
    fetch('https://website.com/api/contacts', {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((resJson) => {
        console.log(resJson);
        dispatch({
          type: 'FETCH_DATA_SUCCESS',
          payload: resJson,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: 'FETCH_DATA_FAILURE',
        });
      });
  }, [authState.token]); // Hook will only be called when token changes (e.g token expires )

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <h3>User Info</h3>
      <p className='first-line paragraph'>🚧</p>
      <React.Fragment>
        <div className='home'>
          {state.isFetching ? (
            <p className='loader'>Loading...</p>
          ) : state.hasError ? (
            <p className='error'>Oops! An error has occurred.</p>
          ) : (
            <>
              {state.contacts.length > 0 &&
                state.contacts.map((contact) => (
                  <ContactCard key={contact.id.toString()} contact={contact} />
                ))}
            </>
          )}
        </div>
      </React.Fragment>
    </div>
  );
};

export default UserInfo;
