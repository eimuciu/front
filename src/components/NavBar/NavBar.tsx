import { useState } from 'react';
import css from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import Modal from '../atoms/Modal/Modal';
import Login from '../pages/Login/Login';

function NavBar() {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} closeModal={closeModal}>
        <Login />
      </Modal>
      <div className={css.main}>
        <Link to="/">
          <img alt="logo" src={logo} />
        </Link>
        <div onClick={handleLoginClick} role="button" className={css.navlink}>
          Login
        </div>
      </div>
    </>
  );
}

export default NavBar;
