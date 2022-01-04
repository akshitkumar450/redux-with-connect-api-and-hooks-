import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger'
import thunk from "redux-thunk";
import { reducers } from "./rootReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(logger, thunk)
);

export const storeNew = createStore(reducers, enhancer)