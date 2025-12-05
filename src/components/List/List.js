import { useState } from 'react';
import styles from './List.module.scss';
import Column from '../Column/Column';
import { v4 as uuidv4 } from 'uuid';
import { data } from '../../utils/utils';

const List = () => {
  const [columns, setColumns] = useState(data.coluns);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue('');
    setColumns([...columns, { title: value, icon: 'list' }]);
  };

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do <span>soon</span>
        </h2>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <section className={styles.columns}>
        {columns.map((props) => (
          <Column {...props} key={uuidv4()} />
        ))}
      </section>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type='text'
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add column</button>
      </form>
    </div>
  );
};

export default List;
