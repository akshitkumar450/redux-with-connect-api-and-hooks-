export const increment = (amount = 1) => {
    return {
        type: 'INCREMENT',
        payload: amount
    };
};

export const decrement = (amount = 1) => {
    return {
        type: 'DECREMENT',
        payload: amount
    };
};

export const set = (amount) => {
    return {
        type: 'SET',
        payload: amount
    }
};

// async function

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        // console.log(getState().count.users);
        const resposne = await
            fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await resposne.json()
        // console.log('postes');
        // we don't return action object from inner function ,instead call dispatch function with action object
        dispatch({
            type: 'FETCH_POSTS',
            payload: data
        })
    }
}