import axios from './httpService'

const url = '/auth'


export const signIn = async ({ email, password }) => {
  const { data: token } = await axios.post(url, {
    email,
    password
  })

  return token
}


export const signOut = () => localStorage.removeItem('token')