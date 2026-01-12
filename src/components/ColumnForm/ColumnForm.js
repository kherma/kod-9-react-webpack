import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import InputLabel from '../InputLabel/InputLabel.js';
import styles from './ColumnForm.module.scss';
import { keys } from '../../utils/keys.js';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store.js';

const ColumnForm = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon }));
    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputLabel htmlFor={keys.title} text='Title:' />
      <TextInput
        name={keys.title}
        id={keys.title}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <InputLabel htmlFor={keys.icon} text='Icon:' />
      <TextInput
        name={keys.icon}
        id={keys.icon}
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />

      <Button text='Add column' />
    </form>
  );
};

export default ColumnForm;
