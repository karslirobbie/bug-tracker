
import React from 'react'


export const TeamDepartmentContext = React.createContext();
export const ProjectContext = React.createContext();
export const TicketContext = React.createContext();
export const UserContext = React.createContext();

export const UserProvider = UserContext.Provider
export const TicketProvider = TicketContext.Provider
export const ProjectProvider = ProjectContext.Provider
export const TeamDepartmentProvider = TeamDepartmentContext.Provider

