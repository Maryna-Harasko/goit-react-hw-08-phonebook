import { AuthNav } from "components/AuthNav/AuthNav"
import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
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
              <AuthNav/>
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