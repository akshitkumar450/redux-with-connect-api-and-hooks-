import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";

export const reducers = combineReducers({
    count: countReducer,
    users: userReducer
})