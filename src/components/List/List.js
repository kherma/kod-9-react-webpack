import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector, shallowEqual } from 'react-redux';
import { getListById } from '../../redux/listsRedux';
import { getColumnsByList } from '../../redux/columnsRedux';
import { useParams, Navigate } from 'react-router';

const List = () => {
  const { listId } = useParams();

  const { title, description, id } = useSelector(
    (state) => getListById(state, listId) ?? {}
  );
  const columns = useSelector(
    (state) => getColumnsByList(state, id),
    shallowEqual
  );

  if (!id) return <Navigate to='/' />;

  return (
    <div>
      <header className={styles.header}>
        {title && <h2 className={styles.title}>{title}</h2>}
      </header>
      {description && <p className={styles.description}>{description}</p>}
      <SearchForm />
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
