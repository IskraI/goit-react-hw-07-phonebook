import React from 'react';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selector';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts
    .filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    .sort((a, b) => a.name.localeCompare(b.name));
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  // console.log('contacts', contacts);
  // console.log('filter', filter);

  return (
    <ul>
      {visibleContacts.map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};
export default ContactList;
