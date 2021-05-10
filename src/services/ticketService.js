import axios from './httpService'


const url = '/tickets'

export const getTickets = async () => {
  const { data: tickets } = await axios.get(url);
  return tickets
}


export const createTicket = async ({ createdBy, ...body }) => {
  const { data: ticket } = await axios.post(url, {
    assignee: createdBy,
    createdBy,
    ...body,
  })

  return ticket;
}