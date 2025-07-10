/**
 * Main Application Component
 * 
 * This is the root component of the AbyssiumVTT application.
 * It provides the basic layout structure with navigation and content areas.
 * 
 * Features:
 * - Persistent navigation bar across all pages
 * - Router outlet for rendering page components
 * - Layout foundation for the entire application
 */

import { Outlet } from "react-router-dom"
import { Navbar } from "./Components/navbar"

/**
 * App Component
 * 
 * The main application component that serves as the layout wrapper.
 * Uses React Router's Outlet to render different pages while maintaining
 * a consistent navigation structure.
 * 
 * @returns {JSX.Element} The main application layout
 */
function App() {
  return (
    <>
      {/* Navigation bar - persistent across all pages */}
      <Navbar />
      
      {/* Content area - renders the current page component */}
      <Outlet />
    </>
  )
}

export default App
