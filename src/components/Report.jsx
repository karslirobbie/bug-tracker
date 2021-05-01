import React, { useState } from 'react'
import RadialBar from './common/charts/RadialBar';
import BasicHeader from './common/BasicHeader'
import Nav from './common/Nav'
import Table from './common/Table'
import Dropdown from './common/Dropdown'


export default function Report () {

  const [series, setSeries] = useState([99])
  const projects = ['Project 1', "Project 2"]


  return (
    <div className="flex place-items-center w-full h-full text-xs text-gray-3000 bg-gray-800">
      <Nav />
      <div className="flex flex-col w-full h-full">
        <BasicHeader title="Report" subtitle={<Dropdown data={projects} />} />
        <main className="flex flex-col lg:flex-row h-3/4 place-items-center mt-20">
          <div className="w-full lg:w-3/4 lg:-mt-20">
            <RadialBar series={series} />
          </div>
          <div className="w-full lg:w-full h-full flex flex-col justify-center">
            <Table header={["ID", "Title"]} />
          </div>
        </main>
      </div>
    </div>
  );
}
