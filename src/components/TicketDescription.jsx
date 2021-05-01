import React from 'react'
import DescriptionList from './common/DescriptionList'
import MobileNav from './common/MobileNav'
import Nav from './common/Nav'

export default function TicketDescription () {
  return (
    <div className="flex w-full h-full">
      <Nav />
      <div className="flex flex-col gap-5 w-11/12  m-5">
        <MobileNav />
        <DescriptionList />
      </div>
    </div>
  )
}
