import React from 'react'

const SignUp = React.lazy(() => import('./components/SignUp'));
const Ticket = React.lazy(() => import('./components/Ticket'))
const SignIn = React.lazy(() => import('./components/SignIn'));
const NotFound = React.lazy(() => import('./components/NotFound'))

const routes = [

  {
    path: "/login",
    component: SignIn
  },
  {
    path: "/signup",
    component: SignUp
  },
  {
    path: "/tickets",
    component: Ticket
  },
  {
    path: "/",
    component: SignUp
  },
  {
    path: "*",
    component: NotFound
  }
]


export default routes