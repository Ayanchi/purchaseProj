import axios from "axios";

export const apiService = axios.create({
    baseURL: 'https://ctfkg-production-79e2.up.railway.app/',
})