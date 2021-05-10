import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ReactComponent as Loading } from './images/loading.svg'
import Errorboundary from './components/common/ErrorBoundary'
import { TicketProvider, ProjectProvider, UserProvider } from './context'
import { getTickets } from './services/ticketService'
import { getProjects } from './services/projectService'
import { getUsers } from './services/userService'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import routes from './routes'


function App () {
  const [tickets, setTickets] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);


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
      setUsers(users);
    }
    populate()
  }, ['users'])


  return (
    <div className="App w-screen h-screen bg-gray-800 font-poppins">
      <ToastContainer />
      <Router>
        <Suspense fallback={<div className="flex h-full justify-center place-items-center"><Loading /></div>}>

          <Route render={({ location }) => {
            return (
              <Switch location={location}>
                {
                  routes.map(({ path, component: Component }) =>
                    <Route key={path} exact path={path} render={(props) => {
                      return (
                        <Errorboundary>
                          <UserProvider value={users}>
                            <ProjectProvider value={projects}>
                              <TicketProvider value={tickets}>
                                <Component {...props} />
                              </TicketProvider>
                            </ProjectProvider>
                          </UserProvider>
                        </Errorboundary>
                      )
                    }} />
                  )
                }
              </Switch>
            )
          }} />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
