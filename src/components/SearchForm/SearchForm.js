import TextInput from './../TextInput/TextInput.js';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput />
      <button className={styles.button}>Search</button>
    </form>
  );
};

export default SearchForm;
