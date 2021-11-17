import axios from 'axios'
import { getToken } from './auth'



const api = axios.create({
    baseURL: 'http://127.0.0.1:3333',
    headers: [
        {'Content-Type' : 'application/json'}
    ]
})


api.interceptors.request.use(
    config => {
        const token = getToken()

        if (token) {
            config.headers.authorization = `Bearer ${ token }`
        }

        return config
    },
    error => {
        return Promise.reject(error)
    }
)


export default api
