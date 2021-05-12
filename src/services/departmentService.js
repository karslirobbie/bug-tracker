import axios from './httpService'


const url = '/departments'

export const getDepartments = async () => {
  const { data: departments } = await axios.get(url);
  return departments
}


export const createDepartment = async ({ ...rest }) => {
  // const { data: ticket } = await axios.post(url, {
  //   assignee: '605bf3ea30b6ce131c1d4524',
  //   createdBy: '605bf3ea30b6ce131c1d4524',
  //   tag: 'TAG-4',
  //   ...rest,
  // })

  return rest;
}