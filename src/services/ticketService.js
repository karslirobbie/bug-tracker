import axios from './httpService'


const url = '/tickets'

export const getTickets = async () => {
  const { data: tickets } = await axios.get(url);
  return tickets
}

export const createTicket = async (body) => {
  // const { data: ticket } = await axios.post(url, {
  //   title: "Sample Title",
  //   type: 'Sample Type',
  //   status: 'Sample Status',
  //   assignee: '605bf3ea30b6ce131c1d4524',
  //   createdBy: '605bf3ea30b6ce131c1d4524',
  //   project: '605bf849d6c04a1a009435b7',
  //   tag: 'TAG-4',
  //   urgency: 'High',
  //   assignedTo: '605bf3ea30b6ce131c1d4524'
  // })

  return body;
}