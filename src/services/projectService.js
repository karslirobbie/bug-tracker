import axios from './httpService'


const url = '/projects'

export const getProjects = async () => {
  const { data: projects } = await axios.get(url);
  return projects
}