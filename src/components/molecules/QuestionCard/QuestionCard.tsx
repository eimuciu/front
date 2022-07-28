import css from './QuestionCard.module.scss';
import { Link } from 'react-router-dom';

function QuestionCard({ singleQuestion }: any) {
  return (
    <div className={css.main}>
      <Link
        to={`/answers/${singleQuestion._id}?question=${JSON.stringify(
          singleQuestion,
        )}`}
      >
        <h3>{singleQuestion.title}</h3>
      </Link>
      <p>{singleQuestion.body}</p>
    </div>
  );
}

export default QuestionCard;
