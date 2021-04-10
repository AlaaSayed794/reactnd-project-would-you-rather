import { _getUsers } from "../_DATA"
import { GETUSERS } from './types'


export const getUsers = () => dispatch => {
    _getUsers().then(users => dispatch({
        type: GETUSERS,
        payload: users

    }))
}