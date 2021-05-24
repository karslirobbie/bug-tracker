
import React from 'react'


export const TeamDepartmentContext = React.createContext();
export const ProjectContext = React.createContext();
export const TicketContext = React.createContext();
export const UserContext = React.createContext();
export const AuthContext = React.createContext();
export const CommentContext = React.createContext();

export const CommentProvider = CommentContext.Provider
export const AuthProvider = AuthContext.Provider
export const UserProvider = UserContext.Provider
export const TicketProvider = TicketContext.Provider
export const ProjectProvider = ProjectContext.Provider
export const TeamDepartmentProvider = TeamDepartmentContext.Provider

