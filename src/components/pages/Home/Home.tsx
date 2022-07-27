import css from './Home.module.scss';
import Button from '../../atoms/Button/Button';
import { BigHeader } from '../../atoms/Header/Header';
import QuestionsList from '../../organisms/QuestionsList/QuestionsList';

function Home() {
  return (
    <div className={css.main}>
      <div className={css.header}>
        <BigHeader text="All Questions" />
        <Button>Ask Question</Button>
      </div>
      <QuestionsList />
    </div>
  );
}

export default Home;
