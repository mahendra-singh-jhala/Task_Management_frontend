import {applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { thunk } from "redux-thunk"
import { authReducer } from "./auth/Reducer"
import { taskReducer } from "./task/Reducer"

// Combine all individual reducers into one root reducer
const rootReducers = combineReducers({
    auth: authReducer, // Handles authentication-related state
    task: taskReducer // Handles task-related state
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))