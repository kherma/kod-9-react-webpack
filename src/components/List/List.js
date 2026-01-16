import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById, getColumnsByList } from '../../redux/store';

const List = () => {
  const LIST_ID = 1;
  const { title, description, id } = useSelector(
    (state) => getListById(state, LIST_ID) ?? {}
  );
  const columns = useSelector((state) => getColumnsByList(state, id));

  return (
    <div>
      <header className={styles.header}>
        {title && <h2 className={styles.title}>{title}</h2>}
      </header>
      {description && <p className={styles.description}>{description}</p>}
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;
