import React from 'react'
import ProjectStatusList from './common/ProjectStatusList'
import BasicHeader from './common/BasicHeader'
import PageTemplate from './common/PageTemplate'


export default function ProjectStatus () {
  return (
    <PageTemplate
      header={<BasicHeader title="Project Status" subtitle="My Project Title" />}
      main={
        <main className="grid md:grid-cols-3 md:auto-cols-fr gap-5 xl:gap-12 mx-10 ">
          <ProjectStatusList title="To do" />

          <ProjectStatusList title="In Progress" />

          <ProjectStatusList title="Done" />
        </main>
      }
    />
  )
}
