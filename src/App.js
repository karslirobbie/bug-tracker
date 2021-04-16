import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes'
import { ReactComponent as Loading } from './images/loading.svg'
function App () {
  return (
    <div className="App w-screen h-screen bg-gray-800  font-poppins">
      <Router>
        <Suspense fallback={<div className="flex h-full justify-center place-items-center"><Loading /></div>}>
          <Switch>
            {routes.map(({ path, component }) =>
              <Route key={path} exact path={path} component={component} />
            )}
          </Switch>
        </Suspense>
      </Router>

    </div>
  );
}

export default App;
