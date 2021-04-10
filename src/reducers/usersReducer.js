import { GETUSERS, ADDQUESTION } from '../actions/types'

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
        case ADDQUESTION:
            return (
                {
                    users: state.users.map(user => {
                        if (user.id == action.payload.author) {
                            user.questions.push(action.payload.id)
                        }
                        return user
                    })
                }
            )
        default: return state;
    }

}