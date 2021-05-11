import { useEffect } from 'react'
import { getTeams } from './services/teamService'
import { getTickets } from './services/ticketService'
import { getProjects } from './services/projectService'
import { getDepartments } from './services/departmentService'
import { getCurrentUser, getUsers } from './services/userService'


export const usePopulateState = ({ setTickets, setProjects, setUsers, setTeamDepartments }) => {

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


  useEffect(() => {
    const populate = async () => {
      const teams = await getTeams();
      const departments = await getDepartments()
      setTeamDepartments({ teams, departments });
    }
    populate()
  }, ['teamDepartments'])
}