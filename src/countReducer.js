const initialState = {
    counter: 0
}

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case 'SET':
            return {
                ...state,
                counter: action.payload
            }
        default:
            return state
    }
}