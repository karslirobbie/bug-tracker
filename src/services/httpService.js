import axios from 'axios'


axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)


export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
}