import { useSelector } from 'react-redux';
import { getAllLists } from '../../redux/store';
import styles from './Lists.module.scss';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Lists = () => {
  const lists = useSelector(getAllLists);

  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>
      {lists.map(({ id, title, description }) => (
        <Link key={uuidv4()} to={`/list/${id}`} className={styles.listLink}>
          <h3>{title}</h3>
          <p>{description}</p>
        </Link>
      ))}
    </section>
  );
};

export default Lists;
