import { AuthNav } from "components/AuthNav/AuthNav"
import { Suspense } from "react"
import {  Outlet } from "react-router-dom"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { authSelector } from "store/auth/authSelect"
import { Header, Nav, PageLink, NavList } from "./Layout.styled"


export const Layout = () => {
const isLoggedIn = useSelector(authSelector.getIsLoggedIn)

  return (
    <>
      <Header>
          <Nav>
            <NavList>
              <li>
                <PageLink to='/'>Home</PageLink>
              </li>
              {isLoggedIn && (
                   <li>
                   <PageLink to='/contacts'>Contacts</PageLink>
                 </li>
              )}
            </NavList>
              {isLoggedIn ? <UserMenu/> : <AuthNav/> }
          </Nav>
      </Header>
      <main>
        <section>
          <Suspense>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </>
  )
}