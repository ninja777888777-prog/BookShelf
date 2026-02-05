import { Outlet } from "react-router"
import Header from "../../widgets/Header/Header"


function Layout() {
  return (
    <>
    <header>
        <Header/>
    </header>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Layout