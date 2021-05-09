import React, { useContext, useState } from 'react'
import Header from './common/Header'
import Table from './common/Table'
import DescriptionList from './common/DescriptionList'
import PageTemplate from './common/PageTemplate'
import TicketContext from '../contexts/ticketContext'
import TicketModal from './TicketModal'



export default function Ticket () {
  const ticketContext = useContext(TicketContext);

  const [show, setShow] = useState(false)

  return (
    <PageTemplate
      header={
        <Header onShow={() => setShow(true)}>
          <TicketModal show={show} handleHide={() => setShow(false)} />
        </Header>}
      main={<Table data={ticketContext.tickets} />}
      other={<DescriptionList data={ticketContext.tickets} />}
    />
  )
}
