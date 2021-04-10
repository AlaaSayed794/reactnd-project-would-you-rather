import { GETQUESTIONS, ADDQUESTION, ADDANSWER } from '../actions/types'

const initialState = {
    questions: [],
}
export default function usersReducer(state = initialState, action) {

    switch (action.type) {
        case GETQUESTIONS:
            let fetchedQuestions = []
            for (const id in action.payload) {
                fetchedQuestions.push(action.payload[id])
            }
            return (
                {

                    questions: fetchedQuestions
                }
            )
        case ADDQUESTION:
            return (
                {

                    questions: [action.payload, ...state.questions]
                }
            )
        case ADDANSWER:
            return (
                {
                    questions: state.questions.map(question => {
                        if (question.id === action.payload.qid) {
                            question[action.payload.answer].votes = [...question[action.payload.answer].votes, action.payload.authedUser]
                        }
                        return question
                    })
                }
            )
        default: return state;
    }

}