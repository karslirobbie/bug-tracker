import React, { useContext } from 'react'
import Header from './common/Header'
import Table from './common/Table'
import DescriptionList from './common/DescriptionList'
import PageTemplate from './common/PageTemplate'
import TicketContext from '../contexts/ticketContext'

export default function Ticket () {
  const ticketContext = useContext(TicketContext);

  return (
    <PageTemplate
      header={<Header title="Tickets" />}
      main={<Table data={ticketContext.tickets} />}
      other={<DescriptionList data={ticketContext.tickets} />}
    />
  )
}
