import axios from './httpService'


const url = '/tickets'

export const getTickets = async ({ _id, roles }) => {
  let request = url;
  const query = `${url}/?assignedTo=${_id}&createdBy=${_id}&assignee=${_id}`

  if (_id && roles && !roles.includes('admin')) request = query;

  const { data: tickets } = await axios.get(request);
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