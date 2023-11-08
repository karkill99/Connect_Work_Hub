export default function reducer(state = {}, action) {
    switch (action.type) {
        case "SIGNUP_STEP_1":
            return {
                ...state,
                tempId: action.payload
            };
        default:
            return state;
    }
}