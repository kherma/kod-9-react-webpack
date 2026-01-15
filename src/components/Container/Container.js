import styles from './Container.module.scss';
import { clsx } from 'clsx';

const Container = ({ children, margin = true }) => {
  return (
    <div className={clsx(styles.container, !margin && styles.noBlockMargin)}>
      {children}
    </div>
  );
};

export default Container;
