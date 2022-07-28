import css from './AnswerCard.module.scss';

function AnswerCard({ singleAnswer }: any) {
  return (
    <div className={css.main}>
      <p>{singleAnswer.body}</p>
    </div>
  );
}

export default AnswerCard;
