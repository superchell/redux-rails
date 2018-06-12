export default function someReducer(state, action) {
    if (state === undefined) {
        state = [];
    }
    if (action.type === 'GET_PROPS') {
        state.push(action.user);
    }

    return state;
}