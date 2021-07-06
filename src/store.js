import { reducer, name } from './reducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'


const reducers = combineReducers({
    count: reducer,
    naam: name
})

// for only dev tools
// const enhancer =
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


// for both dev tools and middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

export const store =
    createStore(reducers, enhancer);