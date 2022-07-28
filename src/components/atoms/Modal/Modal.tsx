import css from './Modal.module.scss';

interface Props {
  children: JSX.Element;
  show: boolean;
}

function Modal({ children, show }: Props) {
  const showStyle = show ? 'block' : 'none';
  return (
    <div style={{ display: showStyle }} className={css.main}>
      {children}
    </div>
  );
}

export default Modal;
