import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import styles from './Column.module.scss';
import { useSelector, shallowEqual } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';
import clsx from 'clsx';

const Column = ({ id, title, icon, favorite = false }) => {
  const cards = useSelector(
    (state) => getFilteredCards(state, id, favorite),
    shallowEqual
  );

  if (!cards.length && favorite)
    return <h2 className={styles.title}>Nothing was added</h2>;

  return (
    <article className={clsx(styles.column, favorite && styles.columnCenter)}>
      {!favorite && (
        <h2 className={styles.title}>
          <span className={clsx(styles.icon, 'fa', `fa-${icon}`)} />
          {title}
        </h2>
      )}
      <ul className={styles.cards}>
        {cards.map(({ id, title, isFavorite }) => (
          <Card key={id} title={title} cardId={id} isFavorite={isFavorite} />
        ))}
      </ul>
      {!favorite && <CardForm columnId={id} />}
    </article>
  );
};

export default Column;
