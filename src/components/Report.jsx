import React, { useState, useContext, useEffect } from 'react'
import { ProjectContext, TicketContext } from '../context'
import RadialBar from './common/charts/RadialBar';
import BasicHeader from './common/BasicHeader'
import Dropdown from './common/Dropdown'
import Table from './common/Table'
import Nav from './common/Nav'



export default function Report () {

  const [series, setSeries] = useState([])
  const [selectedProject, setSelectedProject] = useState("")


  useEffect(() => {
    setSeries([completedPerProject()])
  }, [series])


  const { projects } = useContext(ProjectContext);
  const { tickets } = useContext(TicketContext)


  const projectOptions = [];
  projects.map(({ _id, title }) => projectOptions.push({ label: title, value: _id }))


  const ticketsPerProject = () => tickets.filter(({ project, status }) => selectedProject ? project._id == selectedProject && status != "Done" : status != "Done")
  const completedPerProject = () => tickets.filter(({ project, status }) => selectedProject ? project._id == selectedProject && status == "Done" : status == "Done")?.length


  return (
    <div className="flex place-items-center w-full overflow-auto h-full text-xs text-gray-3000 bg-gray-800">
      <Nav />
      <div className="flex flex-col w-full h-full">
        <BasicHeader title="Report" subtitle={<Dropdown data={projectOptions} onChange={({ currentTarget }) => setSelectedProject(currentTarget.value)} />} />
        <main className="flex flex-col lg:flex-row h-1/2 place-items-center mt-20">
          <div className="w-full lg:w-3/4 lg:-mt-20">
            <RadialBar series={series} />
          </div>
          <div className="w-full lg:w-full h-1/2 lg:h-full flex flex-col justify-center">
            <Table list={ticketsPerProject()} />
          </div>
        </main>
      </div>
    </div>
  );
}
