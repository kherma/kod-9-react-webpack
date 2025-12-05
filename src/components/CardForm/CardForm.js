import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

const CardForm = ({ columnId, addCard }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addCard({ title }, columnId);
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
