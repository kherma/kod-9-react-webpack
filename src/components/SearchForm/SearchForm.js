import { useState, useEffect } from 'react';
import TextInput from './../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import styles from './SearchForm.module.scss';
import { data } from '../../utils/data.js';
import { useDispatch } from 'react-redux';
import { updateSearchstring } from '../../redux/store.js';

const SearchForm = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchstring(searchText));
  };

  useEffect(() => {
    dispatch(updateSearchstring(''));
  }, [dispatch]);

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
