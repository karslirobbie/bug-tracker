import React, { useContext, useState } from 'react'
import Header from './common/Header'
import Table from './common/Table'
import DescriptionList from './common/DescriptionList'
import PageTemplate from './common/PageTemplate'
import { ProjectContext, TicketContext, UserContext } from '../context'
import TicketModal from './TicketModal'



export default function Ticket () {
  const ticketContext = useContext(TicketContext);
  const projectContext = useContext(ProjectContext);
  const userContext = useContext(UserContext);

  const [show, setShow] = useState(false)

  const projectOptions = [];
  const userOptions = [];

  projectContext.map(({ title, _id, alias }) => projectOptions.push({ label: title, value: _id, alias }))
  userContext.map(({ _id, name }) => userOptions.push({ label: name, value: _id }))

  return (
    <PageTemplate
      header={
        <Header onShow={() => setShow(true)}>
          <TicketModal
            show={show}
            projects={projectOptions}
            users={userOptions}
            handleHide={() => setShow(false)} />
        </Header>}
      main={<Table data={ticketContext.tickets} />}
      other={<DescriptionList data={ticketContext.tickets} />}
    />
  )
}
