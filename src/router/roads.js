import { createBrowserRouter } from 'react-router-dom';
import Root from './Root.jsx';

import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';

const roads = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ],
    }
]);

export default roads;