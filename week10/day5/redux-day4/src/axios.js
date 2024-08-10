import axios from 'axios'

export const baseURL = "https://jsonplaceholder.typicode.com/posts";

const instance = axios.create({

    baseURL: baseURL,})


export default instance