import axios from './httpService'


const url = '/teams'

export const getTeams = async () => {
  const { data: teams } = await axios.get(url);
  return teams
}

