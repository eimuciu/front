import css from './NavBar.module.scss';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className={css.main}>
      <h2>QWA QWA</h2>
      <Link className={css.navlink} to="/login">Login</Link>
    </div>
  );
}

export default NavBar;
