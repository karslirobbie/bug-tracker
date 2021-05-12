import React, { useContext, useState } from 'react'
import Header from './common/Header'
import Table from './common/Table'
import PageTemplate from './common/PageTemplate'
import { ProjectContext, TicketContext, UserContext } from '../context'
import TicketModal from './TicketModal'



export default function Ticket () {
  const [show, setShow] = useState(false)

  const { tickets, setTickets } = useContext(TicketContext);
  const { projects } = useContext(ProjectContext);
  const { users: { all: users, currentUser } } = useContext(UserContext);

  const projectOptions = [];
  const userOptions = [];

  projects.map(({ title, _id, alias }) => projectOptions.push({ label: title, value: _id, alias }))
  users.map(({ _id, name }) => userOptions.push({ label: name, value: _id }))


  const setState = (ticket) => {
    const state = [...tickets, ticket]
    setTickets(state)
  }


  return (
    <PageTemplate
      header={
        <Header onShow={() => setShow(true)}>
          <TicketModal
            show={show}
            setState={setState}
            projects={projectOptions}
            users={userOptions}
            currentUser={currentUser._id}
            handleHide={() => setShow(false)} />
        </Header>}
      main={<Table type="tickets" />}
    />
  )
}
