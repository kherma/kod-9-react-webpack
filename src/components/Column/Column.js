import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import styles from './Column.module.scss';

const Column = ({ id, title, icon, cards, addCard }) => {
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
      <CardForm columnId={id} addCard={addCard} />
    </article>
  );
};

export default Column;
