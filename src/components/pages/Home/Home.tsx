import { useState, useEffect } from 'react';
import css from './Home.module.scss';
import Button from '../../atoms/Button/Button';
import { BigHeader } from '../../atoms/Header/Header';
import QuestionsList from '../../organisms/QuestionsList/QuestionsList';
import { getQuestions } from '../../../api/api';
import { useAuthCtx } from '../../../store/AuthProvider';
import Modal from '../../atoms/Modal/Modal';
import AskQuestionForm from '../../organisms/AskQuestionForm/AskQuestionForm';
import { useMsgCtx } from '../../../store/MessagingProvider';
import BouncingLoader from '../../molecules/BouncingLoader/BouncingLoader';
import type { QuestionShape } from '../../../types/types';

const actionGetQuestions = async (
  setQuestions: (a: any) => void,
  setLoading: (a: any) => void,
) => {
  const res = await getQuestions();
  if (res.success) {
    setQuestions(res.data);
    setLoading(false);
    return;
  }
};

interface Props {
  handleDeleteQuestion: () => void;
}

function Home({ handleDeleteQuestion }: Props) {
  const [questions, setQuestions] = useState<QuestionShape[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isUserLoggedIn } = useAuthCtx();
  const { makeMessage } = useMsgCtx();

  useEffect(() => {
    setLoading(true);
    actionGetQuestions(setQuestions, setLoading);
  }, []);

  console.log(questions);

  const askQuestionHandler = () => {
    if (!isUserLoggedIn) {
      makeMessage('Please login before asking a question', 'error');
      return;
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddQuestion = (qObj: QuestionShape) => {
    setQuestions((prev) => [qObj, ...prev]);
  };

  return (
    <>
      <Modal show={showModal} closeModal={closeModal}>
        <AskQuestionForm
          closeModal={closeModal}
          addQuestion={handleAddQuestion}
        />
      </Modal>
      <div className={css.main}>
        <div className={css.header}>
          <BigHeader text="All Questions" />
          <Button onClick={askQuestionHandler}>Ask Question</Button>
        </div>
        {loading ? (
          <BouncingLoader />
        ) : (
          <QuestionsList
            questions={questions}
            handleDeleteQuestion={handleDeleteQuestion}
          />
        )}
      </div>
    </>
  );
}

export default Home;
