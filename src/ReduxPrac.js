import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { decrement, fetchPosts, increment, set } from './actions'
import { useDispatch, useSelector } from 'react-redux'

function ReduxPrac(props) {
    const [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const count = useSelector(state => state.count.counter)
    const users = useSelector(state => state.users.users)
    return (
        <div>
            <h1>counter:{count}</h1>
            {
                /**
                 *   <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => props.increment()}>increment</button>
            <button onClick={() => props.decrement()}>decrement</button>
            <button onClick={() => props.set(+value)}>set</button>
            <button onClick={() => props.fetch()}>fetch users</button>
            {
                props?.users?.map((user) => (
                    <p>{user.title}</p>
                ))
            }
                 */
            }
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(set(value))}>set</button>
            <button onClick={() => dispatch(fetchPosts())}>fetch users</button>
            {
                users?.slice(0, 10).map((user) => (
                    <p key={user.id}>{user.title}</p>
                ))
            }
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         count: state.count.counter,
//         users: state.users.users
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(increment()),
//         decrement: () => dispatch(decrement()),
//         set: (value) => dispatch(set(value)),
//         fetch: () => dispatch(fetchPosts())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ReduxPrac)


export default ReduxPrac
