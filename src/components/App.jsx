import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operation';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/selector';

const App = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title__contacts}>Contacts</h2>
      {contacts.length !== 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}

      {loading && !error && <b>Request in progress...</b>}

      {error && <p>{error}</p>}

      {!loading && !error && contacts.length === 0 && (
        <p>There is no contacts yet.</p>
      )}
    </div>
  );
};
export default App;
