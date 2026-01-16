import { NavLink } from 'react-router-dom';
import styles from './NavigationLink.module.scss';

const NavigationLink = ({ link, text }) => (
  <li>
    <NavLink
      className={({ isActive }) => (isActive ? styles.linkActive : undefined)}
      to={link}
    >
      {text}
    </NavLink>
  </li>
);

export default NavigationLink;
