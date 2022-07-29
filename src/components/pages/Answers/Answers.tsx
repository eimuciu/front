import css from './Answers.module.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAnswers } from '../../../api/api';
import paramsvalue from '../../../utils/getParams';
import QuestionCard from '../../molecules/QuestionCard/QuestionCard';
import { SmallHeader } from '../../atoms/Header/Header';
import AnswersList from '../../organisms/AnswersList/AnswersList';
import BouncingLoader from '../../molecules/BouncingLoader/BouncingLoader';
import { AnswerButton } from '../../atoms/Button/Button';
import { useAuthCtx } from '../../../store/AuthProvider';
import Modal from '../../atoms/Modal/Modal';
import AnswerQuestionForm from '../../organisms/AnswerQuestionForm/AnswerQuestionForm';
import type { AnswerShape } from '../../../types/types';

const actionGetAnswers = async (
  id: string,
  setAnswers: (a: AnswerShape[]) => void,
  setLoading: (a: boolean) => void,
) => {
  const res = await getAnswers(id);
  if (res && res.success) {
    setAnswers(res.data);
    setLoading(false);
    return;
  }
};

function Answers() {
  const { id } = useParams();
  const [answers, setAnswers] = useState<AnswerShape[]>([]);
  const [question, setQuestion] = useState({ _id: '' });
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { isUserLoggedIn } = useAuthCtx();

  useEffect(() => {
    const params = paramsvalue('question');
    setLoading(true);
    if (id) actionGetAnswers(id, setAnswers, setLoading);
    if (params) setQuestion(JSON.parse(params));
  }, [id]);

  console.log(answers);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAnswerQuestionButton = () => {
    setShowModal(true);
  };

  const handleAddAnswer = (aObj: AnswerShape) => {
    setAnswers((prev) => [aObj, ...prev]);
  };

  return (
    <>
      <Modal show={showModal} closeModal={closeModal}>
        <AnswerQuestionForm
          closeModal={closeModal}
          addAnswer={handleAddAnswer}
          questionId={question._id}
        />
      </Modal>
      <div>
        <QuestionCard singleQuestion={question} />
        <div className={css.smallContainer}>
          <SmallHeader text={`${answers.length} Answers`} />
          <div>
            {isUserLoggedIn && (
              <AnswerButton onClick={handleAnswerQuestionButton}>
                Answer question
              </AnswerButton>
            )}
          </div>
        </div>
        {loading ? <BouncingLoader /> : <AnswersList answers={answers} />}
      </div>
    </>
  );
}

export default Answers;
