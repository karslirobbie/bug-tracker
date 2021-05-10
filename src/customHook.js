import { useEffect } from 'react'
import { getTickets } from './services/ticketService'
import { getProjects } from './services/projectService'
import { getCurrentUser, getUsers } from './services/userService'


export const usePopulateState = ({ setTickets, setProjects, setUsers }) => {

  useEffect(() => {
    const populate = async () => {
      const tickets = await getTickets();
      setTickets(tickets);
    }
    populate()
  }, ['tickets'])


  useEffect(() => {
    const populate = async () => {
      const projects = await getProjects();
      setProjects(projects);
    }
    populate()
  }, ['projects'])


  useEffect(() => {
    const populate = async () => {
      const users = await getUsers();
      const currentUser = await getCurrentUser();
      setUsers({ all: users, currentUser });
    }
    populate()
  }, ['users'])
}