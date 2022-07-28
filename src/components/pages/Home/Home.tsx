import { useState, useEffect } from 'react';
import css from './Home.module.scss';
import Button from '../../atoms/Button/Button';
import { BigHeader } from '../../atoms/Header/Header';
import QuestionsList from '../../organisms/QuestionsList/QuestionsList';
import { getQuestions } from '../../../api/api';

const actionGetQuestions = async (setQuestions: (a: any) => void) => {
  const res = await getQuestions();
  if (res.success) {
    setQuestions(res.data);
    return;
  }
};

function Home() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    actionGetQuestions(setQuestions);
  }, []);

  console.log(questions);

  return (
    <div className={css.main}>
      <div className={css.header}>
        <BigHeader text="All Questions" />
        <Button>Ask Question</Button>
      </div>
      <QuestionsList questions={questions} />
    </div>
  );
}

export default Home;
