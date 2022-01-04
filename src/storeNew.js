import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger'
import thunk from "redux-thunk";
import reducers from "./rootReducer";

import { persistStore } from 'redux-persist';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(logger, thunk)
);

export const storeNew = createStore(reducers, enhancer)

// for persisted store
export const persistor = persistStore(storeNew);
