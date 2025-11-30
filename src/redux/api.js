import axios from "axios";

const baseAPI = 'https://dummyjson.com/';
export const baseURL = axios.create({
    baseURL: baseAPI,
    timeout: 8000
})