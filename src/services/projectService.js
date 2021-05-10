import axios from './httpService'


const url = '/projects'

export const getProjects = async () => {
  const { data: projects } = await axios.get(url);
  return projects
}


export const createProject = async (body) => {
  const { data: project } = await axios.post(url, {
    ...body,
  })

  return project;
}