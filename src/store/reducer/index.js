import { combineReducers } from "redux";
import countReducer from "./countReducer";
import todoReducer from "./todoReducer";
const rootReducer = combineReducers({
    count: countReducer,
    todo: todoReducer,
});

export default rootReducer;
