import { useState, useEffect } from 'react';
import css from './Home.module.scss';
import Button from '../../atoms/Button/Button';
import { BigHeader } from '../../atoms/Header/Header';
import QuestionsList from '../../organisms/QuestionsList/QuestionsList';
import { getQuestions } from '../../../api/api';
import { useAuthCtx } from '../../../store/AuthProvider';
import Modal from '../../atoms/Modal/Modal';

const actionGetQuestions = async (setQuestions: (a: any) => void) => {
  const res = await getQuestions();
  if (res.success) {
    setQuestions(res.data);
    return;
  }
};

function Home() {
  const [questions, setQuestions] = useState([]);
  const { isUserLoggedIn } = useAuthCtx();

  useEffect(() => {
    actionGetQuestions(setQuestions);
  }, []);

  console.log(questions);

  const askQuestionHandler = () => {
    if (!isUserLoggedIn) {
      alert('Please login before asking a question');
      return;
    }
  };

  return (
    <>
      <Modal show={true}>
        <h1>This is going to be a modal</h1>
      </Modal>
      <div className={css.main}>
        <div className={css.header}>
          <BigHeader text="All Questions" />
          <Button onClick={askQuestionHandler}>Ask Question</Button>
        </div>
        <QuestionsList questions={questions} />
      </div>
    </>
  );
}

export default Home;
