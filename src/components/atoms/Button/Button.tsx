import css from './Button.module.scss';

interface Props {
  children: string | JSX.Element;
  onClick?: () => void;
}

function Button({ children, onClick }: Props): JSX.Element {
  return (
    <button className={css.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
