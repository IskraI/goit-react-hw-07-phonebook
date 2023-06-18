import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selector';
import { filterContacts } from '../../redux/filterSlice';
import css from './Filter.module.css';
// import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <form className={css.form}>
      <label className={css.label}>
        <span className={css.input__name}>Find contacts by name</span>
        <input
          className={css.input__data}
          type="text"
          name="filter"
          pattern="^[А-Яа-яЁёa-zA-Z\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          // required
          value={filter}
          onChange={e => dispatch(filterContacts(e.target.value))}
        />
      </label>
    </form>
  );
};
// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
export default Filter;
