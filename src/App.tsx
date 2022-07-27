import css from './App.module.scss';
import Button from './components/atoms/Button/Button';
import { BigHeader } from './components/atoms/Header/Header';

function App() {
  return (
    <div className={css.main}>
      <BigHeader text="All Questions" />
      <Button>Ask Question</Button>
    </div>
  );
}

export default App;
