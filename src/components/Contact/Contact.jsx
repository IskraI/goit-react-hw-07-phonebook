import React from 'react';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operation';

import css from './Contact.module.css';

import PropTypes from 'prop-types';

const Contact = ({ contact }) => {
  const { id, name, phone } = contact;
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      <span className={css.name}>{name}:</span>
      <span className={css.number}>{phone}</span>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default Contact;
