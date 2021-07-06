import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, set, fetchPosts }
    from './actions'
import { SetCounter } from './SetCounter'

export const CounterNew = () => {
    // to chnage the store
    const dispatch = useDispatch()
    // to get values from store
    const counter = useSelector(state => state.count.counter)
    // const name = useSelector(state => state.naam.name)
    const posts = useSelector(state => state.count.users)

    console.log(posts);

    return (
        <main className="Counter">
            <p className="count">{counter}</p>

            <section className="controls">
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(set(2))}>reset</button>
                <button onClick={() => dispatch(fetchPosts())}>fetchposts</button>
                <SetCounter />
            </section>
        </main>
    );
};

export default CounterNew
