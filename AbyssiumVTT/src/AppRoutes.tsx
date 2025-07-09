import { createBrowserRouter } from "react-router-dom";
import { Charsheet } from './pages/charsheet';
import App from './App';
import LandingPage from "./pages/landingpage";
import Authentication from "./pages/Authentication";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: 'charsheet', element: <Charsheet /> },
            { path: 'authentication', element: <Authentication /> },
        ]
    }
]);
