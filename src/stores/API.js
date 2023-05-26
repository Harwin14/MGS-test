import axios from "axios";

export const api = axios.create({
    baseURL:'http://159.223.57.121:8090/'
})