import axios from './httpService'


const url = '/tickets'

export const getTickets = async ({ _id, roles }) => {
  const query = `${url}/?assignedTo=${_id}&createdBy=${_id}&assignee=${_id}`

  let request = url;

  console.log('ID', _id)
  if (_id && roles && !roles.includes('admin')) request = query;

  const { data: tickets } = await axios.get(request);

  console.log('request', request)

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