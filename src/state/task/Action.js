import { api } from "../../config/api"
import { CREATE_NEW_TASK_FAILURE, CREATE_NEW_TASK_REQUEST, CREATE_NEW_TASK_SUCCESS, DELETE_TASK_FAILURE, DELETE_TASK_SUCCESS, GET_TASK_FAILURE, GET_TASK_REQUEST, GET_TASK_SUCCESS, UPDATE_TASK_FAILURE, UPDATE_TASK_REQUEST, UPDATE_TASK_SUCCESS } from "./ActionType"

// handle for create task
export const createTask = (userData) => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token")).token
    dispatch({ type: CREATE_NEW_TASK_REQUEST})
    try {
        const data = await api.post("/api/task/create", userData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch({ type: CREATE_NEW_TASK_SUCCESS, payload: data })

        dispatch(getTask())
    } catch (error) {
        dispatch({ type: CREATE_NEW_TASK_FAILURE, payload: error })
    }
}

// handle for get task
export const getTask = () => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token")).token
    dispatch({ type: GET_TASK_REQUEST })
    try {
        const data = await api.get("/api/task", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch({ type: GET_TASK_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_TASK_FAILURE, payload: error })
    }
}

// handle for update task
export const updateTask = (taskData, id) => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token")).token
    dispatch({ type: UPDATE_TASK_REQUEST })
    try {
        const data = await api.put("/api/task/updateTask", {taskData, id}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch({ type: UPDATE_TASK_SUCCESS, payload: data })

        dispatch(getTask())
    } catch (error) {
        dispatch({ type: UPDATE_TASK_FAILURE, payload: error })
    }
}

// handle for delete task
export const deleteTask = ( id ) => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token")).token
    dispatch({ type: DELETE_TASK_FAILURE })
    try {
        const data = await api.delete("/api/task/deleteTask", {
            data: { id },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch({ type: DELETE_TASK_SUCCESS, payload: data })

        dispatch(getTask())
    } catch (error) {
        dispatch({ type: DELETE_TASK_FAILURE, payload: error })
    }
}