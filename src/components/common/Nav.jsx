import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { signOut } from '../../services/authService'

export default function Nav ({ admin }) {
  const location = useHistory();

  const adminLinks = [
    {
      title: "Users",
      path: "users",
      content: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>,
    },
    {
      title: "Teams",
      path: "teams",
      content: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    },
    {
      title: "Departments",
      path: "departments",
      content: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>,
    },
  ]

  const regularLinks = [
    {
      title: "Tickets",
      path: "/tickets",
      content: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>,
    },
    {
      title: "Projects",
      path: "/projects",
      content: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>,
    },
    {
      title: "Report",
      path: "/report",
      content: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    },
  ]

  const links = () => admin ? adminLinks : regularLinks;


  const handleLogout = () => {
    signOut();
    location.replace({ pathname: '/login' })
  }


  return (
    <nav className="hidden md:flex text-xs flex-col w-28 h-full bg-gray-900 rounded-lg text-gray-2000 ">
      <div className="flex flex-col justify-center gap-12 place-items-center h-3/4 w-full">
        {links().map(({ title, content, path }) =>
          <Link key={title} to={path}>
            <div key={title} className="flex flex-col cursor-pointer justify-center place-items-center gap-3 transform hover:scale-110 transition-all delay-100 ease-in">
              <div className="flex justify-center place-items-center w-10 h-10 bg-gray-800 text-lime-400 rounded-full transform transition-all hover:shadow-xl">
                {content}
              </div>
              <p>{title}</p>
            </div>
          </Link>)}
      </div>

      <div className="h-1/4 w-full flex justify-center place-items-center" onClick={handleLogout}>
        <div className="flex flex-col justify-center place-items-center gap-3 transform hover:scale-110 transition-all delay-100 ease-in">
          <div className="flex justify-center place-items-center w-10 h-10 bg-gray-800 cursor-pointer text-lime-400 rounded-full transform transition-all hover:shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </div>
          <p>Logout</p>
        </div>
      </div>
    </nav>
  )
}
