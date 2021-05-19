import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'

export default function PageTemplate ({ header, main, admin }) {
  let location = useLocation()
  return (

    <div className="flex overflow-hidden w-full h-full mr-5 xl:mr-10 rounded-lg text-xs text-gray-3000 bg-gray-800">
      <div className="hidden md:flex">
        <Nav admin={admin} />
      </div>

      {/* If current route is Project Status, use latter template */}

      {!location.pathname.includes('/project-status') &&
        <div className="flex flex-col w-11/12 h-full">
          {header}

          <main className="h-3/4 mt-20 ml-5 md:mt-16 xl:mx-10">
            {main}
          </main>

        </div>}

      {location.pathname.includes('/project-status/') &&
        <div className="flex flex-col w-full h-full">
          {header}
          {main}
        </div>
      }
    </div>

  )
}
