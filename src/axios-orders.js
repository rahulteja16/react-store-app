import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/categories.json'
});

export default instance;