import axios from 'axios'
import { toast } from 'react-toastify'


const AUTH_TOKEN = localStorage.getItem('token')

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
axios.defaults.headers.common['x-auth-token'] = AUTH_TOKEN


axios.interceptors.response.use(
  response => response,
  error => {
    toast.dark("Network Error");
    return Promise.reject(error)
  }
)


export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
}