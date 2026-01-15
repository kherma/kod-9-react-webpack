import styles from './NavLogo.module.scss';

const NavLogo = () => (
  <a href='/' aria-label='home page'>
    <i className={styles.icon + ' fa fa-tasks'} aria-hidden='true'></i>
  </a>
);

export default NavLogo;
