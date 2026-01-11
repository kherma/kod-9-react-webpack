import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import styles from './Column.module.scss';
import { useSelector, shallowEqual } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

const Column = ({ id, title, icon }) => {
  const cards = useSelector(
    (state) => getFilteredCards(state, id),
    shallowEqual
  );

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + icon} /> {title}
      </h2>
      <ul className={styles.cards}>
        {cards.map(({ id, title }) => (
          <Card key={id} title={title} />
        ))}
      </ul>
      <CardForm columnId={id} />
    </article>
  );
};

export default Column;
