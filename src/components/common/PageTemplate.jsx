import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'

export default function PageTemplate ({ header, main, other = null }) {
  let location = useLocation()
  return (
    <div className="flex place-items-center overflow-hidden w-full h-full text-xs text-gray-3000 bg-gray-800">
      <Nav />

      {/* If current route is Project Status, use latter template */}

      {!location.pathname.includes('/project-status') &&
        <div className="flex flex-col lg:w-1/2 w-full h-full">
          {header}

          <main className="h-3/4 mt-10 md:mt-16 mx-5 xl:mx-10">
            {main}
          </main>

        </div>}

      {location.pathname.includes('/project-status/') &&
        <div className="flex flex-col w-full h-full">
          {header}
          {main}
        </div>
      }

      {other &&
        <div className="hidden lg:flex lg:w-1/2 h-full py-10  mr-5 xl:mr-10">
          {other}
        </div>
      }
    </div>
  )
}
