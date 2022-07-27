import css from './Home.module.scss';
import Button from '../../atoms/Button/Button';
import { BigHeader } from '../../atoms/Header/Header';

function Home() {
  return (
    <div className={css.main}>
      <BigHeader text="All Questions" />
      <div>
        <Button>Ask Question</Button>
      </div>
    </div>
  );
}

export default Home;
