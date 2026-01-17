import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import InputLabel from '../InputLabel/InputLabel.js';
import styles from './ListForm.module.scss';
import { keys } from '../../utils/keys.js';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store.js';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
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
      <InputLabel htmlFor={keys.description} text='Description:' />
      <TextInput
        name={keys.description}
        id={keys.description}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button text='Add List' />
    </form>
  );
};

export default ListForm;
