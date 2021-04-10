import { LOGIN } from '../actions/types'

const initialState = {
    currentUser: "",
}
export default function loginReducer(state = initialState, action) {

    switch (action.type) {
        case LOGIN:
            return (
                {
                    currentUser: action.payload
                }
            )
        default: return state;
    }

}