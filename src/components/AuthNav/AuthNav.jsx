import React from "react"
import { NavLink } from "react-router-dom"

export const AuthNav = () =>{
  return(
    <>
    <ul>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>
    </ul>
    </>
  )
}