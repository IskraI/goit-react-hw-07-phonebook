import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operation';
import { selectContacts } from '../../redux/selector';
const ContactForm = () => {
  //store

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  //local state onchange form
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const dataForm = { name, phone };

    if (
      contacts.some(
        el => el.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      return alert(`Contact with name "${name}" is already in contacts`);
    }

    const existNumber = contacts.find(el => el.phone === phone);
    if (existNumber) {
      return alert(
        `Contact with number ${existNumber.phone} is already in  ${existNumber.name}`
      );
    }

    dispatch(addContact(dataForm));

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
          pattern="^[А-Яа-яЁёa-zA-Z\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer"
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
          name="phone"
          // pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im"
          pattern="\+?[0-9\s\-\(\)]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
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
