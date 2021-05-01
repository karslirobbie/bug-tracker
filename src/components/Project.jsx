import React from 'react'
import Header from './common/Header'
import Table from './common/Table'
import DescriptionList from './common/DescriptionList'
import PageTemplate from './common/PageTemplate'

export default function Ticket () {
  return (
    <PageTemplate
      header={<Header title="Projects" />}
      main={<Table type="project-status" />}
      other={<DescriptionList />}
    />
  )
}
