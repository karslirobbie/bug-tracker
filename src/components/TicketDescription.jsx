import React from 'react'
import DescriptionList from './common/DescriptionList'
import MobileNav from './common/MobileNav'
import Nav from './common/Nav'
import { useHistory } from 'react-router-dom'
export default function TicketDescription () {

  let history = useHistory()

  return (
    <div className="flex w-full h-full">
      <Nav />
      <div className="flex flex-col gap-5 w-11/12 pt-5 pl-2">
        <MobileNav />
        <DescriptionList />
      </div>
    </div>
  )
}
