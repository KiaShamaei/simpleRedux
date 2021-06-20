import counterReducer from "./reducers/counter";
import loggedReducer from "./reducers/loggedReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    counter : counterReducer , 
    islogged :loggedReducer
})

export default rootReducer;