import React, { useState } from 'react'
import Header from './common/Header'
import Table from './common/Table'
import DescriptionList from './common/DescriptionList'
import PageTemplate from './common/PageTemplate'
import { ReactComponent as ID } from '../images/id.svg'
import ProjectModal from './ProjectModal'


export default function Ticket () {
  const [show, setShow] = useState(false)
  const header = [<ID />, "title", "status", "created"];

  return (
    <PageTemplate
      header={
        <Header onShow={() => setShow(true)}>
          <ProjectModal show={show} handleHide={() => setShow(false)} />
        </Header>}
      main={
        <Table
          type="project-status"
          header={header}
        />}
      other={<DescriptionList />}
    />
  )
}
