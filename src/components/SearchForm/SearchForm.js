import TextInput from './../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput placeholder='Search...' />
      <Button text='Search' />
    </form>
  );
};

export default SearchForm;
