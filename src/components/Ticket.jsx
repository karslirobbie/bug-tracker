import React from 'react'
import Nav from './common/Nav'
import Main from './common/Main'
import Header from './common/Header'


export default function Ticket () {
  return (
    <div className="flex overflow-hidden w-full h-full text-xs text-gray-3000 bg-gray-800">
      <Nav />

      <div className="flex flex-col xl:w-1/2 w-full h-full">
        <Header />
        <Main />
      </div>

      <div className="ticket-description">

      </div>
    </div>
  )
}
