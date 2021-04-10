import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import usersReducer from './usersReducer'
import questionsReducer from './questionsReducer'
//index file combines all reducers, here we only have the todoReducer
export default combineReducers(

    {
        loginReducer, usersReducer, questionsReducer
    }
)