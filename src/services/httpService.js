import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

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