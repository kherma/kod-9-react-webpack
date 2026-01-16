import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector, shallowEqual } from 'react-redux';
import { getListById, getColumnsByList } from '../../redux/store';
import { useParams } from 'react-router';

const List = () => {
  const { listId } = useParams();

  const { title, description, id } = useSelector(
    (state) => getListById(state, listId) ?? {}
  );
  const columns = useSelector(
    (state) => getColumnsByList(state, id),
    shallowEqual
  );

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
