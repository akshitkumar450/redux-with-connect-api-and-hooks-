import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, set, fetchPosts }
    from './actions'
import { connect } from 'react-redux'
export const Counter = (props) => {
    // console.log(props);
    // console.log(props.users);
    // const dispatch = useDispatch()
    // const counter = useSelector(state => state.counter)

    return (
        <main className="Counter">
            <p className="count">{props.counter}</p>
            <p className="count">{props.name}</p>
            <section className="controls">
                <button onClick={() => props.increment()}>Increment</button>
                <button onClick={() => props.decrement()}>Decrement</button>
                <button onClick={() => props.set(80)}>reset</button>
                <button onClick={() => props.fetchPosts()}>fetchposts</button>
            </section>

            {
                props.users.map((user, idx) => (
                    <div key={idx}>
                        <p>{user.title}</p>
                    </div>
                ))
            }

        </main>
    );
};
// to get from store
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        counter: state.count.counter,
        users: state.count.users,
        name: state.naam.name
    }
}
// to set data in store
const mapDispatchToProps = (dispatch) => {
    return {
        increment: (amount) => dispatch(increment(amount)),
        decrement: (amount) => dispatch(decrement(amount)),
        set: (amount) => dispatch(set(amount)),
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default connect(mapStateToProps, {
//     increment,
//     decrement,
//     set,
//     fetchPosts
// })(Counter);

// if we want to use dispatch function it is avaialble on props
// export default connect(mapStateToProps)(Counter);
