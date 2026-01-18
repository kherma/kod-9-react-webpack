import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = ({ title, cardId, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggleCardFavorite = () => {
    dispatch(toggleCardFavorite(cardId));
  };

  const handleRemoveCard = () => {
    dispatch(removeCard(cardId));
  };

  return (
    <li className={styles.card}>
      <h3>{title}</h3>
      <div className={styles.buttons}>
        <button
          onClick={handleToggleCardFavorite}
          className={styles.button}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite ? 'remove card from favorites' : 'add card to favorites'
          }
        >
          <i
            className={clsx(
              'fa',
              isFavorite ? `${styles.favorite} fa-star` : 'fa-star-o'
            )}
            aria-hidden='true'
          />
        </button>
        <button
          onClick={handleRemoveCard}
          className={styles.button}
          aria-label={'Remove card from column'}
        >
          <i className={clsx('fa', 'fa-trash')} aria-hidden='true' />
        </button>
      </div>
    </li>
  );
};

export default Card;
