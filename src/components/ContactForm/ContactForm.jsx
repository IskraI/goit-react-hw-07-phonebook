import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
  //store
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  //local state onchange form
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const dataForm = { name, number };

    if (
      contacts.some(
        el => el.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      return alert(`Contact with name "${name}" is already in contacts`);
    }

    const existNumber = contacts.find(el => el.number === number);
    if (existNumber) {
      return alert(
        `Contact with number ${existNumber.number} is already in  ${existNumber.name}`
      );
    }

    // dispatch(addContact(dataForm));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <span className={css.input__name}>Name</span>
        <input
          className={css.input__data}
          type="text"
          name="name"
          // pattern="^[a-zA-Z0-9_.\-]+[\\\|\s]?[a-zA-Z0-9_.\-]+$"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        <span className={css.input__name}> Phone</span>
        <input
          className={css.input__data}
          type="tel"
          name="number"
          // pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be min 5 digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button className={css.add__button} type="submit">
        Add contact
      </button>
    </form>
  );
};

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default ContactForm;
