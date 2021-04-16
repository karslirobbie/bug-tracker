import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav () {

  const links = [
    {
      title: "Tickets",
      path: "/tickets",
      content: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>,
    },
    {
      title: "Projects",
      path: "/projects",
      content: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>,
    },
    {
      title: "Report",
      path: "/report",
      content: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    },
    {
      title: "Admin",
      path: "/admin",
      content: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    }
  ]


  return (
    <div className="navi flex flex-col w-28 h-full bg-gray-900 rounded-full text-gray-2000 ">
      <div className="flex flex-col justify-center gap-12 place-items-center h-3/4 w-full">
        {links.map(({ title, content, path }) =>
          <Link key={title} to={path}>
            <div key={title} className="flex flex-col cursor-pointer justify-center place-items-center gap-3 transform hover:scale-110 transition-all delay-100 ease-in">
              <div className="flex justify-center place-items-center w-11 h-11 bg-gray-800 text-lime-400 rounded-full transform transition-all hover:shadow-xl">
                {content}
              </div>
              <p>{title}</p>
            </div>
          </Link>)}

      </div>

      <div className="h-1/4 w-full flex justify-center place-items-center">
        <div className="flex flex-col justify-center place-items-center gap-3 transform hover:scale-110 transition-all delay-100 ease-in">
          <div className="flex justify-center place-items-center w-11 h-11 bg-gray-800 cursor-pointer text-lime-400 rounded-full transform transition-all hover:shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </div>
          <p>Logout</p>
        </div>
      </div>
    </div>
  )
}
