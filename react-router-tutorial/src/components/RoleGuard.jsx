
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const RoleGuard = ({ allowedRoles }) => {
    const user = localStorage.getItem("user")
  return (
    <div>{user && allowedRoles.includes(user.role)? <Outlet /> : <Navigate to="/unauthorized" />}</div>
  )
}

export default RoleGuard