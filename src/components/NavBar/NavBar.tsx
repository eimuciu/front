import css from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

function NavBar() {
  return (
    <div className={css.main}>
      <Link to="/">
        <img alt="logo" src={logo} />
      </Link>
      <Link className={css.navlink} to="/login">
        Login
      </Link>
    </div>
  );
}

export default NavBar;
