import css from './QuestionCard.module.scss';
import { Link } from 'react-router-dom';
import DropDown from '../DropDown/DropDown';
import { useAuthCtx } from '../../../store/AuthProvider';
import { QuestionShape } from '../../../types/types';

interface Props {
  singleQuestion: QuestionShape;
  handleDeleteQuestion: () => void;
}

function QuestionCard({ singleQuestion, handleDeleteQuestion }: Props) {
  const { isUserLoggedIn, user } = useAuthCtx();
  return (
    <div className={css.main}>
      {isUserLoggedIn && user._id === singleQuestion.uid && (
        <DropDown onDelete={handleDeleteQuestion} />
      )}
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
