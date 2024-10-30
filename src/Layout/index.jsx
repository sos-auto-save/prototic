import { Link, Outlet } from "react-router-dom";


export const Layout = () => {
  return(
    <>
    <header>
      <h1> THIS IS A HEADER</h1>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <p>THIS IS A FOOTER + NAV BAR</p>
    </footer>
    </>
  )
}