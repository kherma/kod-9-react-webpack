import TextInput from './../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import styles from './SearchForm.module.scss';
import { data } from '../../utils/utils.js';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput placeholder={data.textInput.search} />
      <Button text={data.button.search} />
    </form>
  );
};

export default SearchForm;
