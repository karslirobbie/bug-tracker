import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TicketProvider, ProjectProvider, UserProvider, AuthProvider, TeamDepartmentProvider } from './context'
import { ReactComponent as Loading } from './images/loading.svg'
import Errorboundary from './components/common/ErrorBoundary'
import React, { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { usePopulateState } from './customHook'
import 'react-toastify/dist/ReactToastify.css'
import routes from './routes'



function App () {
  const [token, setToken] = useState("")
  const [tickets, setTickets] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState({ currentUser: "", all: [] });
  const [teamDepartments, setTeamDepartments] = useState({ teams: [], departments: [] })

  usePopulateState({ users, token, setTickets, setProjects, setUsers, setTeamDepartments })

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
                          <TeamDepartmentProvider value={{ teamDepartments, setTeamDepartments }}>
                            <UserProvider value={{ users, setUsers }}>
                              <AuthProvider value={{ token, setToken }}>
                                <ProjectProvider value={{ projects, setProjects }}>
                                  <TicketProvider value={{ tickets, setTickets }}>
                                    <Component {...props} />
                                  </TicketProvider>
                                </ProjectProvider>
                              </AuthProvider>
                            </UserProvider>
                          </TeamDepartmentProvider>
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
