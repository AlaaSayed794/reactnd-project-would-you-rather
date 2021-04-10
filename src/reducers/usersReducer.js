import { GETUSERS } from '../actions/types'

const initialState = {
    users: [],
}
export default function usersReducer(state = initialState, action) {

    switch (action.type) {
        case GETUSERS:
            let fetchedUsers = []
            for (const id in action.payload) {
                fetchedUsers.push(action.payload[id])
            }
            return (
                {

                    users: fetchedUsers
                }
            )
        default: return state;
    }

}