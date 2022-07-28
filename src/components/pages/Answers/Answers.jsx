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

const actionGetAnswers = async (id, setAnswers, setLoading) => {
  const res = await getAnswers(id);
  if (res && res.success) {
    setAnswers(res.data);
    setLoading(false);
    return;
  }
};

function Answers() {
  const { id } = useParams();
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState({});
  const [loading, setLoading] = useState(false);
  const { isUserLoggedIn } = useAuthCtx();

  useEffect(() => {
    setLoading(true);
    actionGetAnswers(id, setAnswers, setLoading);
    setQuestion(JSON.parse(paramsvalue('question')));
  }, [id]);

  console.log(answers);

  return (
    <div>
      <QuestionCard singleQuestion={question} />
      <div className={css.smallContainer}>
        <SmallHeader text={`${answers.length} Answers`} />
        <div>
          {isUserLoggedIn && <AnswerButton>Answer question</AnswerButton>}
        </div>
      </div>
      {loading ? <BouncingLoader /> : <AnswersList answers={answers} />}
    </div>
  );
}

export default Answers;
