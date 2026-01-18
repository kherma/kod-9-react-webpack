import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux';

const CardForm = ({ columnId }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ title, columnId }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button text='Add card' />
    </form>
  );
};

export default CardForm;
