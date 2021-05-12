import axios from './httpService'


const url = '/teams'

export const getTeams = async () => {
  const { data: teams } = await axios.get(url);
  return teams
}

export const createTeam = async ({ ...rest }) => {
  // const { data: ticket } = await axios.post(url, {
  //   assignee: '605bf3ea30b6ce131c1d4524',
  //   createdBy: '605bf3ea30b6ce131c1d4524',
  //   tag: 'TAG-4',
  //   ...rest,
  // })

  return rest;
}
