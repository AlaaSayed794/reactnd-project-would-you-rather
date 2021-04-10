import { GETQUESTIONS, ADDQUESTION } from '../actions/types'

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
        default: return state;
    }

}