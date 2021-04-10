import { _getQuestions, _saveQuestion } from "../_DATA"
import { GETQUESTIONS, ADDQUESTION } from './types'


export const getQuestions = () => dispatch => {
    _getQuestions().then(questions => dispatch({
        type: GETQUESTIONS,
        payload: questions

    }))
}
export const saveQuestion = (question) => dispatch => {
    _saveQuestion().then(dispatch({
        type: ADDQUESTION,
        payload: question
    }))
}