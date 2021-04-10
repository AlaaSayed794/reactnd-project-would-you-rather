import { LOGIN } from '../actions/types'

const initialState = {
    currentUser: "",
}
export default function loginReducer(state = initialState, action) {

    switch (action.type) {
        case LOGIN:
            console.log(action.payload)
            return (
                {
                    currentUser: action.payload
                }
            )
        default: return state;
    }

}