import React from 'react'
import Nav from './common/Nav'
import ProjectStatusList from './common/ProjectStatusList'

export default function ProjectStatus () {
  return (
    <div className="flex place-items-center w-full h-full text-xs text-gray-3000 bg-gray-800 overflow-y-scroll">
      <Nav />

      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col h-1/6">
          <div className="flex md:hidden">
            <div className="flex flex-col justify-center place-items-center gap-3 transform hover:scale-110 transition-all delay-100 ease-in">
              <div className="flex justify-center mt-5 ml-5 place-items-center w-10 h-10 bg-gray-900 cursor-pointer text-lime-400 rounded-full transform transition-all hover:shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <header className="flex w-full h-full items-end justify-around md:justify-between">
            <h2 className="text-lg md:text-3xl font-medium tracking-tight text-gray-300 px-5 md:px-24">My Project</h2>
            <h1 className="text-gray-300 text-xs md:text-lg font-medium md:px-4 md:py-2 md:mx-20">
              My project Title
            </h1>
          </header>
        </div>
        <main className="grid md:grid-cols-3 md:auto-cols-fr gap-5 xl:gap-12 mx-10 ">
          <ProjectStatusList title="To do" />

          <ProjectStatusList title="In Progress" />

          <ProjectStatusList title="Done" />
        </main>

      </div>
    </div>
  )
}
