import axios from './httpService'


const url = '/tickets'

export const getTickets = async () => {
  const { data: tickets } = await axios.get(url);
  return tickets
}