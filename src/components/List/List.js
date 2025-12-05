import { useState } from 'react';
import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { data } from '../../utils/utils';
import uuid4 from 'uuid4';

const List = () => {
  const [columns, setColumns] = useState(data.columns);
  const addColumn = (newColumn) => {
    setColumns([...columns, newColumn]);
  };

  const addCard = (newCard, columnId) => {
    console.log(columnId);

    const columnsUpdated = columns.map((column) => {
      if (column.id === columnId)
        return {
          ...column,
          cards: [...column.cards, { id: uuid4(), title: newCard.title }],
        };
      else return column;
    });

    setColumns(columnsUpdated);
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
          <Column {...props} key={props.id} addCard={addCard} />
        ))}
      </section>
      <ColumnForm addColumn={addColumn} />
    </div>
  );
};

export default List;
