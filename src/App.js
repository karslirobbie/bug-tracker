import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes'
import { ReactComponent as Loading } from './images/loading.svg'
import { PageTransition } from '@steveeeie/react-page-transition'

function App () {
  return (
    <div className="App w-screen h-screen bg-gray-800  font-poppins">

      <Router>
        <Suspense fallback={<div className="flex h-full justify-center place-items-center"><Loading /></div>}>

          <Route render={({ location }) => {
            return (
              <PageTransition
                preset="scaleUpScaleUp"
                transitionKey={location.pathname}>
                <Switch location={location}>
                  {routes.map(({ path, component }) =>
                    <Route key={path} exact path={path} component={component} />
                  )}
                </Switch>
              </PageTransition>
            )
          }} />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
