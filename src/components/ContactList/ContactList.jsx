import React from 'react';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
import { selectContacts, selectFilter } from '../../redux/selector';

const getVisibleContacts = (contacts, filter) => {
  // const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  // const visibleContacts = getVisibleContacts(contacts, filter);
  console.log('contacts', contacts);
  // console.log('filter', filter);

  return (
    <ul>
      {contacts.map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};
export default ContactList;
