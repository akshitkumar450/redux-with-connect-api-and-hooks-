import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, set }
    from './actions'

export const SetCounter = () => {
    const dispatch = useDispatch()
    const storeCount = useSelector(state => state.counter)
    const [count, setCount] = useState(storeCount)

    useEffect(() => {
        setCount(storeCount)
    }, [storeCount])

    return (
        <section className="controls">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    // to conver from string to integer
                    dispatch(increment(+count))
                }}
            >
                <label htmlFor="set-to">Set Count</label>
                <input id="set-to" type="number"
                    value={count}
                    onChange={(e) => setCount(e.target.value)} />
                <input type="submit" />
            </form>
        </section>
    );
};
