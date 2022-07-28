import QuestionCard from "../../molecules/QuestionCard/QuestionCard"

function QuestionsList({questions}) {
    return <div>{questions.map((qObj) => <QuestionCard key={qObj._id} singleQuestion={qObj} />)}</div>
}

export default QuestionsList