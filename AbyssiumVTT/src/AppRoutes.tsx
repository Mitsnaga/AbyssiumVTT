import { createBrowserRouter } from "react-router";
import { Charsheet } from './pages/charsheet';
import App from './App';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'charsheet', element: <Charsheet /> },
        ]
    }
]);
