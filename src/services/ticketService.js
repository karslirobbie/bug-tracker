import axios from './httpService'


const url = '/tickets'

export const getTickets = async () => {
  const { data: tickets } = await axios.get(url);
  return tickets
}

export const createTicket = async ({ ...rest }) => {
  // const { data: ticket } = await axios.post(url, {
  //   assignee: '605bf3ea30b6ce131c1d4524',
  //   createdBy: '605bf3ea30b6ce131c1d4524',
  //   tag: 'TAG-4',
  //   ...rest,
  // })

  return rest;
}