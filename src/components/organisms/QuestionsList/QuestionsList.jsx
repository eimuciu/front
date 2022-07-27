import QuestionCard from "../../molecules/QuestionCard/QuestionCard"

function QuestionsList() {
    return <div>{[1,2,3,4,5].map((_) => <QuestionCard />)}</div>
}

export default QuestionsList