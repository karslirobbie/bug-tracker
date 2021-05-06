import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ReactComponent as Loading } from './images/loading.svg'
import { TicketProvider } from './contexts/ticketContext'
import { ProjectProvider } from './contexts/projectContext'
import { getTickets } from './services/ticketService'
import { getProjects } from './services/projectService'
import routes from './routes'


function App () {
  const [tickets, setTickets] = useState([]);
  const [projects, setProjects] = useState([]);

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


  return (
    <div className="App w-screen h-screen bg-gray-800  font-poppins">
      <Router>
        <Suspense fallback={<div className="flex h-full justify-center place-items-center"><Loading /></div>}>

          <Route render={({ location }) => {
            return (
              <Switch location={location}>
                {
                  routes.map(({ path, component: Component }) =>
                    <Route key={path} exact path={path} render={(props) => {
                      return (
                        <ProjectProvider value={projects}>
                          <TicketProvider value={tickets}>
                            <Component {...props} />
                          </TicketProvider>
                        </ProjectProvider>
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
