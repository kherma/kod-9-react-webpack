import styles from './TextInput.module.scss';

const TextInput = ({
  placeholder = '',
  type = 'text',
  name,
  id,
  value,
  onChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={styles.input}
      name={name}
      type={type}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
