import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { userReducer } from './userReducer'
const reducers = combineReducers({
    userReducer
}) 

export const store = createStore(reducers, applyMiddleware(reduxThunk))