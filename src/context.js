
import React from 'react'

export const ProjectContext = React.createContext();
export const TicketContext = React.createContext();
export const UserContext = React.createContext();

export const TicketProvider = TicketContext.Provider
export const ProjectProvider = ProjectContext.Provider
export const UserProvider = UserContext.Provider

export const UserConsumer = UserContext.Consumer