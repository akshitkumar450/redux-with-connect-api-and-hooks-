import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //using localstorage BTS

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['count', 'users'] //to persist the specific reducer
};

const reducers = combineReducers({
    count: countReducer,
    users: userReducer
})
// to be used in storeNew
export default persistReducer(persistConfig, reducers);