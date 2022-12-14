import axios from 'axios'

export const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 5000
})

service.interceptors.response.use(res => {
   const {success, message, data} = res.data
    if (success) {
        return data
    }
    return Promise.reject(new Error(message))
})