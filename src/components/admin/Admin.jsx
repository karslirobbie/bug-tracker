import { useTheContext, useComponents } from '../../customHook'
import React, { useState } from 'react'
import PageTemplate from '../common/PageTemplate'
import Header from '../common/Header'
import Table from '../common/Table'


export default function Admin () {
  const [show, setShow] = useState(false)

  const {
    projects, users, departments, currentUser,
    teams, setTeamDepartments, setUsers,
  } = useTheContext()


  const setUser = (user) => {
    const all = [...users, user]
    setUsers({ currentUser, all })
  }

  const setTeam = (team) => {
    setTeamDepartments({ teams: [...teams, team], departments })
  }

  const setDept = (dept) => {
    setTeamDepartments({ departments: [...departments, dept], teams })
  }

  const props = {
    show, users, projects, departments, teams,
    setShow, setTeam, setUser, setDept
  }

  const { Component, list, header } = useComponents(props);


  return (
    <PageTemplate
      header={
        <Header
          onShow={() => setShow(true)}
          admin={true}>
          <Component />
        </Header>}
      main={<Table header={header()} list={list()} />}
      admin={true}
    />
  )
}
