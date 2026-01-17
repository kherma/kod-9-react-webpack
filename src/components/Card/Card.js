import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = ({ title, cardId, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggleCardFavorite = () => {
    dispatch(toggleCardFavorite(cardId));
  };

  return (
    <li className={styles.card}>
      <h3>{title}</h3>
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
    </li>
  );
};

export default Card;
