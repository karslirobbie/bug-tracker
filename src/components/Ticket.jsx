import React from 'react'
import Header from './common/Header'
import Table from './common/Table'
import DescriptionList from './common/DescriptionList'
import PageTemplate from './common/PageTemplate'

export default function Ticket () {
  return (
    <PageTemplate
      header={<Header title="Tickets" />}
      main={<Table />}
      other={<DescriptionList />}
    />
  )
}
