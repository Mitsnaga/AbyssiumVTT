/**
 * Application Routing Configuration
 * 
 * This file defines all the routes for the AbyssiumVTT application using React Router.
 * It sets up a nested routing structure with the main App component as the layout
 * and individual pages as children routes.
 * 
 * Route Structure:
 * - / (root) - Landing page with animated potion brewing theme
 * - /charsheet - Character sheet management interface
 * - /authentication - Login and signup forms
 * 
 * All routes share the same layout (App component) which includes the navigation bar.
 */

import { createBrowserRouter } from "react-router-dom";
import { Charsheet } from './pages/charsheet';
import App from './App';
import LandingPage from "./pages/landingpage";
import Authentication from "./pages/Authentication";

/**
 * Application Router Configuration
 * 
 * Creates a browser router with nested routes. The App component serves as the
 * layout wrapper, while individual pages are rendered as children through the
 * Outlet component in App.tsx.
 * 
 * @constant {Router} router - The configured router instance
 */
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            // Default route - Landing page with brewing animation
            { 
                index: true, 
                element: <LandingPage /> 
            },
            // Character sheet management page
            { 
                path: 'charsheet', 
                element: <Charsheet /> 
            },
            // User authentication (login/signup) page
            { 
                path: 'authentication', 
                element: <Authentication /> 
            },
        ]
    }
]);
