import AnswerCard from '../../molecules/AnswerCard/AnswerCard';

function AnswersList({ answers }: any) {
  return (
    <div>
      {answers.map((aObj: any) => (
        <AnswerCard key={aObj._id} singleAnswer={aObj} />
      ))}
    </div>
  );
}

export default AnswersList;
