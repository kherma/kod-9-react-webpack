import styles from './NavLogo.module.scss';
import { Link } from 'react-router-dom';

const NavLogo = () => (
  <Link to='/' aria-label='home page'>
    <i className={styles.icon + ' fa fa-tasks'} aria-hidden='true'></i>
  </Link>
);

export default NavLogo;
