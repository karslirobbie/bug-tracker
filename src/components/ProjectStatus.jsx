import React from 'react'
import Nav from './common/Nav'
import ProjectList from './common/ProjectList'

export default function ProjectStatus () {
  return (
    <div className="flex place-items-center w-full h-full text-xs text-gray-3000 bg-gray-800">
      <Nav />

      <div className="flex flex-col w-full h-full">
        <header className="flex w-full h-1/6 items-end justify-between px-24 text-gray-300">
          <h2 className="text-3xl font-medium tracking-tight">Project Status</h2>
          <h1 className="text-lg">My First Project</h1>
        </header>

        <main className="grid h-4/6 grid-cols-3 auto-cols-fr gap-5 xl:gap-12 mx-10 ">
          <ProjectList title="To do" />

          <ProjectList title="In Progress" />

          <ProjectList title="Done" />
        </main>

      </div>
    </div>
  )
}
