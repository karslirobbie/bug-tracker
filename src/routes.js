import React from 'react'

const Ticket = React.lazy(() => import('./components/Ticket'))
const TicketDescription = React.lazy(() => import('./components/TicketDescription'))

const Project = React.lazy(() => import('./components/Project'))
const ProjectStatus = React.lazy(() => import('./components/ProjectStatus'))

const SignUp = React.lazy(() => import('./components/SignUp'));
const Login = React.lazy(() => import('./components/SignIn'));
const NotFound = React.lazy(() => import('./components/NotFound'))

const Report = React.lazy(() => import('./components/Report'))
const Admin = React.lazy(() => import('./components/admin/Admin'))


const routes = [

  {
    path: "/login",
    component: Login
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
    path: "/tickets/:id",
    component: TicketDescription
  },
  {
    path: "/projects",
    component: Project
  },
  {
    path: "/project-status/:id",
    component: ProjectStatus
  },
  {
    path: "/report",
    component: Report
  },
  {
    path: "/admin",
    component: Admin
  },
  {
    path: "/admin/:path",
    component: Admin
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