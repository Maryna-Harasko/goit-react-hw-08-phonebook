import { AuthNav } from "components/AuthNav/AuthNav"
import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { authSelector } from "store/auth/authSelect"


export const Layout = () => {
const isLoggedIn = useSelector(authSelector.getIsLoggedIn)
console.log(isLoggedIn)
  return (
    <>
      <header>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/contacts'>Contacts</NavLink>
              </li>
              {isLoggedIn ? <UserMenu/> : <AuthNav/> }
            </ul>
          </nav>
        </div>
      </header>
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