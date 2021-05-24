import React from 'react'
import DescriptionList from './common/DescriptionList'
import MobileNav from './common/MobileNav'
import Nav from './common/Nav'


export default function TicketDescription ({ admin }) {
  return (
    <div className="flex w-full h-full">
      <Nav />
      <div className="flex flex-col gap-5 w-11/12 pt-5 pl-2">
        <MobileNav admin={admin} />
        <DescriptionList />
      </div>
    </div>
  )
}
