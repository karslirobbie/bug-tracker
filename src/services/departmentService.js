import axios from './httpService'


const url = '/departments'

export const getDepartments = async () => {
  const { data: departments } = await axios.get(url);
  return departments
}

