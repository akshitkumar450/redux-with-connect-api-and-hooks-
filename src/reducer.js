const initialState = {
    counter: 0,
    users: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                counter: state.counter + action.payload
            };
        }
        case 'DECREMENT': {
            return {
                ...state,
                counter: state.counter - action.payload
            };
        }

        case 'SET': {
            return {
                ...state,
                counter: action.payload
            };
        }

        case 'FETCH_POSTS': {
            return {
                ...state,
                users: action.payload
            }
        }
        default:
            return state;
    }
};

const nameState = {
    name: 0
}

export const name = (state = nameState, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                name: state.name + action.payload
            };
        }

        default:
            return state;
    }
};


