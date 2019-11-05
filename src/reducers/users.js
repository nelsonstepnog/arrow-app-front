export function users(state = [], action) {
    if (action.type === "USERS_FETCH_DATA_SUCCESS") {
        return action.users;
    } else {
        return state;
    }
}
