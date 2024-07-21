// In dataService.js, import the axios module and create a function named fetchPosts that makes a GET request to the JSONPlaceholder API to fetch data for all posts.

import axios from "axios";

export const fetchPosts = async () => {

    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

    return response.data
}
