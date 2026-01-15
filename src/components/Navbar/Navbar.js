import styles from './Navbar.module.scss';
import Container from '../Container/Container';
import NavLogo from './NavLogo/NavLogo';
import NavLink from './NavLink/NavLink';
import { navLinks } from '../../utils/navLinks';
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
  return (
    <nav className={styles.navbar} aria-label='main navigation'>
      <Container>
        <div className={styles.innerNavbar}>
          <NavLogo />
          <ul className={styles.navlinks}>
            {navLinks.map(({ link, text }) => (
              <NavLink key={uuidv4()} link={link} text={text} />
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
