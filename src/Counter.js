import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, set, fetchPosts }
    from './actions'
import { connect } from 'react-redux'
import { useState } from 'react';
export const Counter = (props) => {
    // console.log(props);
    // console.log(props.users);
    // const dispatch = useDispatch()
    // const counter = useSelector(state => state.counter)
    const [qty, setQty] = useState(0)
    return (
        <main className="Counter">
            <p className="count">{props.counter}</p>
            <p className="count">{props.name}</p>
            <section className="controls">
                <input value={qty} onChange={(e) => setQty(e.target.value)} />
                <button onClick={() => props.increment(+qty)}>Increment</button>
                <button onClick={() => props.decrement()}>Decrement</button>
                <button onClick={() => props.set(+qty)}>reset</button>
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
