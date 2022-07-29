import AnswerCard from '../../molecules/AnswerCard/AnswerCard';
import { AnswerShape } from '../../../types/types';

interface Props {
  answers: AnswerShape[];
  handleLike: (a: string) => void;
  handleDislike: (a: string) => void;
}

function AnswersList({ answers, handleLike, handleDislike }: Props) {
  return (
    <div>
      {answers.map((aObj: any) => (
        <AnswerCard
          key={aObj._id}
          singleAnswer={aObj}
          handleLike={handleLike}
          handleDislike={handleDislike}
        />
      ))}
    </div>
  );
}

export default AnswersList;
