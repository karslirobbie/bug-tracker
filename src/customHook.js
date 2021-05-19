import { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import User from './components/admin/User'
import Team from './components/admin/Team'
import Department from './components/admin/Department'
import { getTeams } from './services/teamService'
import { getTickets } from './services/ticketService'
import { getProjects } from './services/projectService'
import { getDepartments } from './services/departmentService'
import { getCurrentUser, getUsers } from './services/userService'
import { TeamDepartmentContext, UserContext, ProjectContext } from './context'



export const usePopulateState = (props) => {
  const {
    token,
    users: { currentUser },
    setTickets, setProjects, setUsers,
    setTeamDepartments
  } = props


  useEffect(() => {
    const populate = async () => {
      const users = await getUsers();
      const currentUser = await getCurrentUser();
      setUsers({ all: users, currentUser });
    }
    populate()
  }, [token])


  useEffect(() => {
    const populate = async () => {
      const tickets = await getTickets(currentUser);
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
      const teams = await getTeams();
      const departments = await getDepartments()
      setTeamDepartments({ teams, departments });
    }
    populate()
  }, ['teamDepartments'])
}



export const useTheContext = () => {
  const { projects, setProjects } = useContext(ProjectContext);
  const { users: { all: users, currentUser }, setUsers } = useContext(UserContext);
  const { teamDepartments: { teams, departments }, setTeamDepartments } = useContext(TeamDepartmentContext);

  return {
    projects, setProjects, users, currentUser,
    teams, departments, setUsers, setTeamDepartments
  }
}



export const useComponents = (props) => {
  const location = useLocation().pathname

  const { show, users, projects, setTeam, setDept, setUser, setShow, departments, teams } = props

  /** move to another custom hook. used multiple times in different pages */
  const projectOptions = [];
  projects.map(({ title, _id, alias }) => projectOptions.push({ label: title, value: _id, alias }))

  const departmentOptions = [];
  departments.map(({ name, _id }) => departmentOptions.push({ label: name, value: _id }))

  const userOptions = [];
  users.map(({ _id, name }) => userOptions.push({ label: name, value: _id }))

  const UserComponent = <User show={show} users={users} projects={projectOptions} setState={setUser} handleHide={() => setShow(false)} />
  const DepartmentComponent = <Department show={show} setState={setDept} handleHide={() => setShow(false)} />;
  const TeamComponent = <Team show={show} users={userOptions} departments={departmentOptions} setState={setTeam} handleHide={() => setShow(false)} />

  const paths = [
    {
      link: "users",
      header: ["Name", "Email", "Roles", "Projects"],
      component: UserComponent,
      list: users
    },
    {
      link: "departments",
      header: ["Name"],
      component: DepartmentComponent,
      list: departments
    },
    {
      link: "teams",
      header: ["Name", "Members", "Department"],
      component: TeamComponent,
      list: teams
    }
  ]


  const Component = () => paths.find(({ link }) => location.includes(link))?.component ?? paths[0].component
  const list = () => paths.find(({ link }) => location.includes(link))?.list ?? paths[0].list
  const header = () => paths.find(({ link }) => location.includes(link))?.header ?? paths[0].header


  return { Component, list, header }

}