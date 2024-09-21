import css from './SearchBox.module.css';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const inputId = nanoid();

  const dispatch = useDispatch();

  const onSearchContact = event => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  };

  const filterValue = useSelector(selectNameFilter);

  return (
    <div className={css.searchContainer}>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        id={inputId}
        type="text"
        name="search"
        onChange={onSearchContact}
        value={filterValue}
      />
    </div>
  );
};

export default SearchBox;
