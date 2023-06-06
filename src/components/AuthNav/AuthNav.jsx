import { NavList, PageLink } from "components/Layout/Layout.styled"
import React from "react"

export const AuthNav = () =>{
  return(
    <>
    <NavList>
      <PageLink to='/login'>Login</PageLink>
      <PageLink to='/register'>Register</PageLink>
    </NavList>
    </>
  )
}