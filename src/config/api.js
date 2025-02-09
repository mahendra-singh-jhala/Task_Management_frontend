import axios from "axios"

export const API_BASE_URL = "https://task-managment-backend-l4z1.onrender.com"
export const api = axios.create({
    baseURL: API_BASE_URL,
});