
import { Outlet } from "react-router-dom"
import { Navbar } from "./Components/navbar"



function App() {
  return (

    <>
      <Navbar />
      <Outlet />
    </>

  )
}

export default App
