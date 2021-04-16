import React from 'react'
import Nav from './common/Nav'
import Header from './common/Header'
import Table from './common/Table'


export default function Ticket () {
  return (
    <div className="flex overflow-hidden w-full h-full text-xs text-gray-3000 bg-gray-800">
      <Nav />

      <div className="flex flex-col xl:w-1/2 w-full h-full">
        <Header title="Tickets" />
        <main className="h-3/4 mt-16 mx-10 ">
          <Table />
        </main>
      </div>

      <div className="ticket-description">

      </div>
    </div>
  )
}
