import React, { useState, useContext } from 'react'
import Header from './common/Header'
import Table from './common/Table'
import DescriptionList from './common/DescriptionList'
import PageTemplate from './common/PageTemplate'
import { ReactComponent as ID } from '../images/id.svg'
import ProjectModal from './ProjectModal'
import {
  ProjectContext,
  UserContext,
  TeamDepartmentContext
} from '../context'



export default function Project () {

  const [show, setShow] = useState(false)
  const header = [<ID />, "title", "status", "created"];

  const { projects, setProjects } = useContext(ProjectContext);
  const { teams, departments } = useContext(TeamDepartmentContext);
  const { currentUser } = useContext(UserContext);

  const setState = (project) => {
    const state = [...projects, project]
    setProjects(state)
  }

  const teamOptions = [];
  const departmentOptions = [];

  teams.map(({ name, _id, department }) => teamOptions.push({ label: name, value: _id, department: department.name }))
  departments.map(({ name, _id }) => departmentOptions.push({ label: name, value: _id }))

  return (

    <PageTemplate
      header={
        <Header onShow={() => setShow(true)}>
          <ProjectModal
            show={show}
            teams={teamOptions}
            departments={departmentOptions}
            setState={setState}
            currentUser={currentUser._id}
            handleHide={() => setShow(false)} />
        </Header>}
      main={<Table type="project-status" header={header} />}
      other={<DescriptionList />}
    />
  )
}
