import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAnswers } from '../../../api/api';
import paramsvalue from '../../../utils/getParams';
import QuestionCard from '../../molecules/QuestionCard/QuestionCard';
import { SmallHeader } from '../../atoms/Header/Header';
import AnswersList from '../../organisms/AnswersList/AnswersList';

const actionGetAnswers = async (id, setAnswers) => {
  const res = await getAnswers(id);
  if (res && res.success) {
    setAnswers(res.data);
    return;
  }
};

function Answers() {
  const { id } = useParams();
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState({});

  useEffect(() => {
    actionGetAnswers(id, setAnswers);
    setQuestion(JSON.parse(paramsvalue('question')));
  }, [id]);

  console.log(answers);

  return (
    <div>
      <QuestionCard singleQuestion={question} />
      <SmallHeader text="All Answers" />
      <AnswersList answers={answers} />
    </div>
  );
}

export default Answers;
