import { Outlet } from "react-router-dom"

// components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


// props


function MianLayout() {
  return (
    <>
        <Navbar/>
        <main className="site-container">
            <Outlet/>
        </main>
        {/* <Footer/> */}
    </>
  )
}

export default MianLayout