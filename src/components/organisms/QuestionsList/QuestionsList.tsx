import QuestionCard from '../../molecules/QuestionCard/QuestionCard';
import type { QuestionShape } from '../../../types/types';

interface Props {
  handleDeleteQuestion: () => void;
  questions: QuestionShape[];
}

function QuestionsList({ questions, handleDeleteQuestion }: Props) {
  return (
    <div>
      {questions.map((qObj) => (
        <QuestionCard
          key={qObj._id}
          singleQuestion={qObj}
          handleDeleteQuestion={handleDeleteQuestion}
        />
      ))}
    </div>
  );
}

export default QuestionsList;
