import styles from './TextInput.module.scss';

const TextInput = ({ placeholder }) => {
  return (
    <input placeholder={placeholder} className={styles.input} type='text' />
  );
};

export default TextInput;
