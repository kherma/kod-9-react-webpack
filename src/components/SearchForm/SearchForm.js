import { useState } from 'react';
import TextInput from './../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import styles from './SearchForm.module.scss';
import { data } from '../../utils/utils.js';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SEARCH_TEXT', payload: searchText });
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder={data.textInput.search}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button text={data.button.search} />
    </form>
  );
};

export default SearchForm;
