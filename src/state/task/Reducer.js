import { CREATE_NEW_TASK_FAILURE, CREATE_NEW_TASK_REQUEST, CREATE_NEW_TASK_SUCCESS, DELETE_TASK_FAILURE, DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, GET_TASK_FAILURE, GET_TASK_REQUEST, GET_TASK_SUCCESS, UPDATE_TASK_FAILURE, UPDATE_TASK_REQUEST, UPDATE_TASK_SUCCESS } from "./ActionType"

const initialState = {
    task: [],
    isLoading: false,
    success: false,
    error: null
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_TASK_REQUEST:
        case GET_TASK_REQUEST:
        case UPDATE_TASK_REQUEST:
        case DELETE_TASK_REQUEST:
            return { ...state, isLoading: true, error: null }

        case CREATE_NEW_TASK_SUCCESS:
            return { ...state, isLoading: false, task: action.payload, error: null }
        case GET_TASK_SUCCESS:
            return { ...state, isLoading: false, task: action.payload, error: null }
        case UPDATE_TASK_SUCCESS:
            return { ...state, isLoading: false, task: action.payload, error: null }
        case DELETE_TASK_SUCCESS:
            return { ...state, isLoading: false, task: action.payload, error: null }

        case CREATE_NEW_TASK_FAILURE:
        case GET_TASK_FAILURE:
        case UPDATE_TASK_FAILURE:
        case DELETE_TASK_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

        default:
            return state
    }
}