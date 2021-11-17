import axios from 'axios'
import { getToken } from './auth'



const api = axios.create({
    baseURL: 'http://127.0.0.1:3333',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': true
    },
    mode: 'cors'
})


api.interceptors.request.use(
    config => {
        const token = getToken()

        if (token) {
            config.headers.Authorization = `Bearer ${ token }`
        }

        return config
    },
    error => {
        return Promise.reject(error)
    }
)



export default api
