import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA"
import { GETQUESTIONS, ADDQUESTION, ADDANSWER } from './types'


export const getQuestions = () => dispatch => {
    _getQuestions().then(questions => dispatch({
        type: GETQUESTIONS,
        payload: questions

    }))
}
export const saveQuestion = (question) => dispatch => {
    _saveQuestion(question).then(newQuestion => dispatch({
        type: ADDQUESTION,
        payload: newQuestion
    }))
}
export const saveAnswer = (answer) => dispatch => {
    _saveQuestionAnswer(answer).then(dispatch({
        type: ADDANSWER,
        payload: answer
    }))
}