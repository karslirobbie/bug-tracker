import React, { useState, useContext } from 'react'
import { ProjectContext, UserContext } from '../context'
import Header from './common/Header'
import Table from './common/Table'
import DescriptionList from './common/DescriptionList'
import PageTemplate from './common/PageTemplate'
import { ReactComponent as ID } from '../images/id.svg'
import ProjectModal from './ProjectModal'



export default function Project () {

  const [show, setShow] = useState(false)
  const header = [<ID />, "title", "status", "created"];

  const { projects, setProjects } = useContext(ProjectContext);
  const { currentUser } = useContext(UserContext);

  const setState = (project) => {
    const state = [...projects, project]
    setProjects(state)
  }


  return (
    <PageTemplate
      header={
        <Header onShow={() => setShow(true)}>
          <ProjectModal
            show={show}
            setState={setState}
            currentUser={currentUser._id}
            handleHide={() => setShow(false)} />
        </Header>}
      main={<Table type="project-status" header={header} />}
      other={<DescriptionList />}
    />
  )
}
