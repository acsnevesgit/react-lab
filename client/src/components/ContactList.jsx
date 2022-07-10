import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //  access the state, update the state

// Reducers
import { changeLoading } from '../reducers/QuestionReducer';

// Components
import { Contact } from './Contact';
import { FaSadTear } from 'react-icons/fa';

export const ContactList = ({ contacts, search, deleteContact }) => {
  const [contactList, setContactList] = useState([]);

  const dispatch = useDispatch();

  // ------------------------------------------ Functions ------------------------------------------
  // Fetch contacts from API
  useEffect(() => {
    let API_URL = 'https://randomuser.me/api';
    dispatch(changeLoading(true));
    fetch(API_URL)
      .then((res) => res.json())
      .then((response) => {
        dispatch(changeLoading(false));
        setContactList(response.results);
      });
  }, [setContactList, dispatch]);

  // const fetchContacs = async () => {
  //   let API_URL = `https://randomuser.me/api?results=${contactsAmount}`;

  //   if (contactGender.length) {
  //     API_URL = API_URL.concat(`&gender=${contactGender}`); // example: gender=female
  //   };
  //   if (contactNationality.length) {
  //     API_URL = API_URL.concat(`&nat=${contactNationality}`); // example: nat=gb
  //   };
  //   if (contactIncludes.length) {
  //     API_URL = API_URL.concat(`&inc=${contactIncludes}`); // example: inc=gender,name,nat
  //   };
  //   if (contactExcludes.length) {
  //     API_URL = API_URL.concat(`&exc=${contactExcludes}`);  // example: exc=login
  //   };

  //   dispatch(changeLoading(true));

  //   await fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setContactList(response.results);
  //       dispatch(changeLoading(false));
  //     });
  // };

  // ------------------------------------------ Render ------------------------------------------ (Presentational Component == no logic)

  return (
    <div className='contact-list-container'>
      {contacts.map((item) => {
        return (
          <Contact key={item.id} contactData={item} deleteContact={deleteContact} />
        )
      })}
      {contacts.length <= 0 && (
        <div className='empty-contact-list'>
          <FaSadTear size={50} />
          <div>
            {search ? (
              <>
                <p>Sorry, no contacts were found. Try another search word or add a new contact.</p>
              </>
            ) : (
              <>
                <p>Your list is empty. Go ahead and starting adding new contacts.</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;