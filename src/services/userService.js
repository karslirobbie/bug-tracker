import axios from './httpService'
import jwtDecode from 'jwt-decode'

const url = '/users'


const alternativeToken = { _id: "605bf3ea30b6ce131c1d4524", email: "clementerobbie@gmail.com", roles: ["admin"] }

export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : alternativeToken;

  return decoded
}

export const getUsers = async () => {
  const { data: users } = await axios.get(url);
  return users
}

export const createUser = async ({ ...rest }) => {
  // const { data: ticket } = await axios.post(url, {
  //   assignee: '605bf3ea30b6ce131c1d4524',
  //   createdBy: '605bf3ea30b6ce131c1d4524',
  //   tag: 'TAG-4',
  //   ...rest,
  // })

  return rest;
}