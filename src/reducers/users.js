export function users(state = [], action) {
    switch (action.type) {
        case "FETCH_USERS_SUCCESS":
            return action.data
        default:
            return state;
    }
}